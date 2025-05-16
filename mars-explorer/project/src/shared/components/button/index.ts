import { BaseComponent, BaseProps } from "../../../core/BaseComponent.js";

declare const _: any;

export interface ButtonProps extends BaseProps {
  text?: string;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
  className?: string;
  attributes?: Record<string, string | boolean | number>;
  events?: { [key: string]: (event: Event) => void };
}

export class Button extends BaseComponent<ButtonProps> {
  constructor(props: ButtonProps = {}) {
    const {
      text,
      onClick,
      disabled = false,
      type = "button",
      cssClass,
      attributes: propAttributes = {},
      ...restProps
    } = props;

    const buttonAttributes: Record<string, any> = {
      ...propAttributes,
      type,
      ...(disabled ? { disabled: true } : {}),
    };

    const buttonEvents: Record<string, any> = { ...(restProps.events || {}) };
    if (onClick) {
      buttonEvents.click = onClick;
    }

    super("button", {
      ...restProps,
      text: text || "Button",
      cssClass: `button-element ${cssClass || ""}`.trim(),
      attributes: buttonAttributes,
      events: buttonEvents,
    });
  }

  render(): string {
    return this.props.text || "";
  }

  componentDidMount() {
    super.componentDidMount();
  }

  componentWillUnmount() {
    super.componentWillUnmount();
  }

  public setText(newText: string): void {
    this.props.text = newText;
    this.setState({});
  }
}
