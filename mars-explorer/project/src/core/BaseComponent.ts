import { nanoid } from "nanoid";

type ComponentChildren = { [key: string]: BaseComponent<any, any> };

export interface BaseProps extends Record<string, any> {
  children?: ComponentChildren;
  id?: string;
  cssClass?: string;
  attributes?: Record<string, any>;
  events?: Record<string, any>;
  style?: Record<string, string>;
}

type State = Record<string, any>;

interface InternalEventHandler {
  element: HTMLElement;
  type: string;
  handler: EventListener;
}

export abstract class BaseComponent<
  P extends BaseProps = BaseProps,
  S extends State = {}
> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const;

  public id: string = nanoid(6);
  public props: P;
  public children: ComponentChildren = {};
  protected state: S;
  root: HTMLElement;
  private _internalEventHandlers: InternalEventHandler[] = [];

  constructor(tagName: string, props: P, initialState: S = {} as S) {
    this.props = props;
    this.state = initialState;
    this.root = document.createElement(tagName);

    if (props.id) {
      this.root.id = props.id;
    }

    if (props.cssClass) {
      this.root.className = props.cssClass;
    }

    // Bind methods
    this.getElement = this.getElement.bind(this);
    this.setState = this.setState.bind(this);

    this.init();
    this.update();
  }

  // --- Abstract & Lifecycle Methods ---

  /**
   * Optional initialization logic after constructor.
   * Good place for setting up initial event listeners internal to the component.
   */
  init(): void {}

  /**
   * Called *after* the component's element is rendered and attached to the DOM.
   * Ideal place for external event listeners (e.g., window, document, eventBus).
   */
  componentDidMount(): void {}

  /**
   * Called just *before* the component's element is removed from the DOM.
   * Ideal place to clean up external event listeners.
   */
  componentWillUnmount(): void {}

  /**
   * Renders the component's content using its state and props.
   * Subclasses MUST implement this to return the HTML string.
   * @returns {string} HTML string representation of the component.
   */
  abstract render(): string;

  /**
   * Protected method for subclasses to define which children should be rendered.
   * This is called by the update method every time.
   * @returns {ComponentChildren | null} A map of child keys to component instances, or null/undefined.
   */
  protected updateChildren(): ComponentChildren | null {
    return this.props.children || null;
  }

  // --- State Management ---

  /**
   * Updates the component's state and triggers a re-render.
   * Uses Object.assign for shallow merging of new state.
   * @param {Partial<S>} newState - An object containing the state properties to update.
   */
  setState(newState: Partial<S>): void {
    const oldState = { ...this.state };
    Object.assign(this.state, newState);
    this.update();
  }

  // --- Rendering & DOM Manipulation ---

  /**
   * Re-renders the component's HTML content and re-applies attributes/events.
   * Calls updateChildren() to get the correct map for _renderChildren.
   */
  private update(): void {
    const componentNameForUpdateLog = this.constructor.name;
    console.log(`[${componentNameForUpdateLog}.update] CALLED (Option 2).`);

    const html = this.render();

    this.removeEvents();
    this.componentWillUnmount();

    this.root.innerHTML = html;

    this.applyAttributes();
    this.applyEvents();

    const currentChildrenMap = this.updateChildren();
    this._renderChildren(currentChildrenMap);

    this.componentDidMount();
  }

  private applyEvents(): void {
    this.removeInternalEventListeners();
    if (this.props.events) {
      Object.entries(this.props.events).forEach(
        ([event, handler]: [string, unknown]) => {
          if (typeof handler === "function") {
            const boundHandler = (handler as EventListener).bind(this);
            this.root.addEventListener(event, boundHandler);
          }
        }
      );
    }
  }

  private removeEvents(): void {
    this.removeInternalEventListeners();
  }

  /**
   * Placeholder for subclasses to remove listeners added in addInternalEventListeners.
   * Called before innerHTML is cleared during update().
   */
  protected removeInternalEventListeners(): void {
    if (this._internalEventHandlers) {
      this._internalEventHandlers.forEach(({ element, type, handler }) => {
        element.removeEventListener(type, handler);
      });
      this._internalEventHandlers = [];
    }
  }

  private applyAttributes(): void {
    if (this.props.id) this.root.id = this.props.id;
    if (this.props.cssClass) this.root.className = this.props.cssClass;
    else this.root.removeAttribute("class");

    this.root.style.cssText = "";
    if (this.props.style && typeof this.props.style === "object") {
      Object.assign(this.root.style, this.props.style);
    }

    const oldAttributes = Array.from(this.root.attributes).map(
      (attr) => attr.name
    );
    oldAttributes.forEach((name) => {
      if (name !== "id" && name !== "class" && name !== "style") {
        this.root.removeAttribute(name);
      }
    });

    if (this.props.attributes) {
      Object.entries(this.props.attributes).forEach(
        ([key, value]: [string, unknown]) => {
          if (
            key.toLowerCase() !== "id" &&
            key.toLowerCase() !== "class" &&
            key.toLowerCase() !== "style"
          ) {
            if (
              key.toLowerCase() === "value" &&
              this.root instanceof HTMLInputElement
            ) {
              (this.root as HTMLInputElement).value = String(value);
            } else if (typeof value === "boolean") {
              if (value) this.root.setAttribute(key, "");
              else this.root.removeAttribute(key);
            } else {
              this.root.setAttribute(key, String(value));
            }
          }
        }
      );
    }
  }

  getElement(): HTMLElement {
    return this.root;
  }

  public triggerUnmount(): void {
    this.componentWillUnmount();
    this.removeEvents();

    const childrenToUnmount =
      this.updateChildren() || this.props.children || {};
    Object.values(childrenToUnmount).forEach((child) => {
      if (child && typeof child.triggerUnmount === "function") {
        child.triggerUnmount();
      }
    });
  }

  public triggerMount(): void {
    this.componentDidMount();
  }

  private _renderChildren(childrenToRender?: ComponentChildren | null): void {
    const componentName = this.constructor.name;

    const childrenToRenderActual = childrenToRender;

    if (
      !childrenToRenderActual ||
      Object.keys(childrenToRenderActual).length === 0
    ) {
      return;
    }

    Object.entries(childrenToRenderActual).forEach(([key, childComponent]) => {
      const placeholder = this.root.querySelector(`[data-child-key="${key}"]`);

      if (placeholder && childComponent instanceof BaseComponent) {
        try {
          placeholder.replaceWith(childComponent.getElement());
          if (typeof childComponent.triggerMount === "function") {
            childComponent.triggerMount();
          }
        } catch (error) {
          console.error(
            `[${componentName}._renderChildren] Error replacing placeholder for key "${key}":`,
            error,
            "Placeholder:",
            placeholder,
            "Child Element:",
            childComponent.getElement()
          );
        }
      } else if (childComponent) {
        if (!placeholder) {
        }
      }
    });
  }
}
