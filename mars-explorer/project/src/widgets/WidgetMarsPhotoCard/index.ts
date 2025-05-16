import { BaseComponent, BaseProps } from "../../core/BaseComponent.js";

declare const _: any;

interface WidgetMarsPhotoCardProps extends BaseProps {
  photo: { src: string };
}

export class WidgetMarsPhotoCard extends BaseComponent<WidgetMarsPhotoCardProps> {
  constructor(props: WidgetMarsPhotoCardProps) {
    super("article", {
      ...props,
      cssClass: `mars-photo-card ${props.cssClass || ""}`.trim(),
      events: {
        ...(props.events || {}),
      },
    });
  }

  render(): string {
    return "";
  }
}
