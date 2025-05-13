import { BaseComponent, BaseProps } from "../../../core/BaseComponent.js";

declare const _: any; // Lodash might not be needed if render returns empty

export interface InputProps extends BaseProps {
  type?: "text" | "number" | "search" | "password" | "email" | "tel";
  name?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (event: Event) => void;
  cssClass?: string;
  attributes?: Record<string, string | boolean | number>;
  events?: Record<string, (event: Event) => void>;
}

export class Input extends BaseComponent<InputProps> {
  constructor(props: InputProps = {}) {
    const {
      type = "text",
      name = "",
      value = "",
      placeholder = "",
      onChange,
      cssClass,
      attributes: propAttributes = {},
      ...restProps
    } = props;

    const inputAttributes: Record<string, any> = {
      ...propAttributes,
      type,
      name,
      value,
      placeholder,
    };

    const inputEvents: Record<string, any> = { ...(restProps.events || {}) };
    if (onChange) {
      inputEvents.change = onChange;
    }

    super("input", {
      ...restProps,
      cssClass: `input-element ${cssClass || ""}`.trim(),
      attributes: inputAttributes,
      events: inputEvents,
    });
  }

  render(): string {
    return "";
  }
}
