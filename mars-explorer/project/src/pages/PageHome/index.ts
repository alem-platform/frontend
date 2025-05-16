import { BaseComponent, BaseProps } from "../../core/BaseComponent.js";

declare const _: any;

interface PageHomeState {
  error: string | null;
  roverType: string;
  sol: number;
}

interface PageHomeProps extends BaseProps {}

export class PageHome extends BaseComponent<PageHomeProps, PageHomeState> {
  constructor(props: PageHomeProps = {}) {
    super(
      "section",
      {
        ...props,
        cssClass: `mars-rover-search-page ${props.cssClass || ""}`.trim(),
        attributes: {
          ...(props.attributes || {}),
          "aria-labelledby": "mars-rover-search-heading",
        },
      },
      {
        error: null,
        roverType: "curiosity",
        sol: 1000,
      }
    );
  }

  handleSearch = () => {};

  render(): string {
    const roverInputId = `rover-name-input-${this.id}`;
    const solInputId = `sol-input-${this.id}`;

    const templateString = `
      <h2 id="mars-rover-search-heading">Mars Rover Photo Explorer</h2>
      <div class="mars-rover-search-controls">
        <div class="input-control-group">
          <label for="${roverInputId}" class="input-label">Rover Name:</label>
          <div data-child-key="roverInput"></div>
        </div>
        <div class="input-control-group">
          <label for="${solInputId}" class="input-label">Martian Sol (Day):</label>
          <div data-child-key="solInput"></div>
        </div>
        <div data-child-key="searchButton"></div>
      </div>
      
    `;

    const compiledTemplate = _.template(templateString);
    return compiledTemplate(this.state);
  }
}
