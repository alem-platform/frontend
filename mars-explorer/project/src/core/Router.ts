import { BaseComponent } from "./BaseComponent.js";

type ComponentFactory = (params?: Record<string, string>) => BaseComponent<any>;

interface Route {
  path: string;
  componentFactory: ComponentFactory;
  match?: RegExpMatchArray | null; // To store matched params
}

export class Router {
  private routes: Route[] = [];
  private currentComponent: BaseComponent<any> | null = null;
  private rootElement: HTMLElement;

  constructor(rootQuerySelector: string) {
    const root = document.querySelector(rootQuerySelector);
    if (!root) {
      throw new Error(
        `Root element not found for selector: ${rootQuerySelector}`
      );
    }
    this.rootElement = root as HTMLElement;
  }

  /**
   * Registers a route.
   * @param path Path string (e.g., '/', '/users', '/artwork/:id')
   * @param componentFactory Function that returns an instance of the component for this route.
   */
  registerRoute(path: string, componentFactory: ComponentFactory): this {
    this.routes.push({
      path,
      componentFactory,
    });
    return this;
  }

  /**
   * Starts the router, listening to hash changes.
   */
  start(): void {
    window.addEventListener("hashchange", this.handleLocationChange);
    this.handleLocationChange(); // Initial load
  }

  /**
   * Stops the router.
   */
  stop(): void {
    window.removeEventListener("hashchange", this.handleLocationChange);
  }

  private handleLocationChange = (): void => {
    const path = window.location.hash.slice(1) || "/"; // Get path from hash, default to '/'
    console.log(`[Router] Hash changed to: ${path}`);
    this.renderRoute(path);
  };

  private renderRoute(path: string): void {
    let matchedRoute: Route | undefined;
    let routeParamsObj: Record<string, string> = {};

    for (const route of this.routes) {
      const paramNames: string[] = [];
      const regexPath = route.path.replace(/\:([^\/]+)/g, (_, paramName) => {
        paramNames.push(paramName);
        return "([^\\/]+)";
      });
      const regex = new RegExp(`^${regexPath}$`);
      const match = path.match(regex);

      if (match) {
        matchedRoute = route;
        paramNames.forEach((name, index) => {
          routeParamsObj[name] = match[index + 1];
        });
        break;
      }
    }

    if (matchedRoute) {
      console.log(`[Router] Matched route: ${matchedRoute.path}`);
      // Unmount previous component if exists
      if (this.currentComponent) {
        this.currentComponent.triggerUnmount();
      }

      this.currentComponent = matchedRoute.componentFactory(routeParamsObj);
      this.rootElement.innerHTML = "";
      this.rootElement.appendChild(this.currentComponent.getElement());
      this.currentComponent.triggerMount();
      console.log(`[Router] Mounted component for path: ${path}`);
    } else {
      console.warn(`[Router] No route found for path: ${path}`);
      // Render a 404 component
      this.rootElement.innerHTML = "<h2>404 - Page Not Found</h2>";
      this.currentComponent = null;
    }
  }

  /**
   * Navigates to a new path (using hash).
   * @param path The path to navigate to
   */
  navigateTo(path: string): void {
    window.location.hash = path;
  }
}
