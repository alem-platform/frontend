# Mars Explorer

## Learning Objectives

By completing this project, you will:

- Build a functional Single Page Application (SPA) from scratch using TypeScript.
- Understand challenges of managing state, UI updates, and navigation in a SPA.
- Implement a component-based architecture with lifecycle management.
- Integrate a public third-party API (NASA Mars Rover Photos) for data fetching.
- Use templating (Lodash `_.template`) for dynamic HTML generation.

## Abstract

In this project, you will build a **Mars Explorer** that allows users to:

- Browse photos taken by NASA's [Mars rovers](https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/) (Curiosity, Opportunity, Spirit, Perseverance).
- Filter photos by rover name and [Martian Sol (day)](https://en.wikipedia.org/wiki/Mars_sol).
- View a gallery of photos.
- Handle loading states and potential API errors.

![mars rover](https://github.com/alem-platform/frontend/blob/mars-explorer/mars_rover.jpg)

## Context

### Imperative JavaScript

Traditional web development often relies on **imperative DOM manipulation** to update the UI. This becomes problematic in dynamic applications where content changes based on user interactions and API responses.

### Component-Based Architecture and Templating

Modern web applications use **component-based architecture** combined with **templating**:

- **Components**: Break the UI into reusable pieces (`Input`, `Button`).

- **Templating (for page structure)**: Use a templating engine (like Lodash) for the overall structure of dynamic pages.

- **Component Rendering (for elements)**: Individual components render their own content, which are then placed into the templated structure by the `BaseComponent` framework.

### Templating with Lodash

You will use **Lodash's `_.template`** function for dynamic HTML.

Define a template for the gallery and render it dynamically:

```typescript
const templateString = `
  <div>
    <h2>Mars Photos</h2>
    <div class="photo-grid">
      <% photos.forEach((photo, index) => { %>
        <div data-child-key="photo-<%= index %>"></div>
      <% }); %>
    </div>
  </div>
`;

const compiled = _.template(templateString);
const html = compiled({ photos: [...] }); // Pass your data here
```

> Lodash templates are plain strings with embedded JavaScript expressions, compiled at runtime.

> 💡 Frameworks like React and Vue provide advanced tools for these tasks. By building these elements yourself, you'll understand their fundamentals.

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Lodash `_.template` Documentation](https://lodash.com/docs/4.17.15#template)
- [Introduction to Single Page Applications (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/SPA)
- [Vite Documentation](https://vitejs.dev/)
- [Parcel Documentation](https://parceljs.org/)
- [NASA Mars Rover Photos API Documentation](https://api.nasa.gov/) (specifically the Mars Rover Photos section)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Node.js](https://nodejs.org/) (v16 or later recommended)

## General Criteria

- No external packages or CDN imports are allowed except those specified in `package.json` (Lodash, Vite/Parcel, TypeScript). No jQuery, React, etc.
- The project must run without errors in the browser console.
- No linter errors or warnings (`npm run lint` must pass for all `.js` and `.ts` files).
- Only vanilla HTML, CSS, and TypeScript/JavaScript are allowed for the app logic.
- Do not commit API keys. Use a config file or environment variable that is gitignored.
- The UI must not crash unexpectedly during review.
- Code must follow standard ESLint rules and the following mandatory rules:

```json
{
  "semi": "error",
  "no-console": "error",
  "no-unused-vars": "error",
  "no-var": "error",
  "no-undef": "error"
}
```

## Core Features

- **Component-based architecture:**

  - Implement all UI elements as reusable components (`MarsPhotoCard`, `Input`, `Button`, `PageMarsRoverSearch`) extending `BaseComponent`.
  - Each component should manage its own state and update the UI reactively.
  - Implement dynamic rendering: Use Lodash templates for page structure and ensure child components render in the correct DOM locations.

- **SPA & Routing:**

  - The application should use a client-side router for navigation (hash-based or similar SPA routing).
  - Navigating to a route should load the correct component and update the view without a full page reload.
  - Any unregistered route (including photo detail routes) must display a 404 page.

- **Mars Rover Search Page:**

  - This page should display a paginated grid of photo cards using `MarsPhotoCard` components.
  - It must include input fields for rover name and Martian Sol, each with an associated `<label>` for accessibility.
  - It must include pagination controls (Next/Previous buttons).
  - It must feature a search button to fetch photos.
  - The UI should handle loading and error states appropriately.
  - On initial page load, photos should be automatically loaded and displayed (not an empty page).
  - The default rover must be "curiosity" and the default Martian Sol must be 1000.
  - When the user clicks the search button, the application should make a new request to the NASA API and update the results.

- **Pagination:**

  - The gallery should display 25 photos per page (by utilizing NASA API pagination).
  - Implement pagination using the NASA API's `page` parameter.
  - Ensure Next/Previous buttons work correctly and update the gallery.

- **Photo Card:**

  - Each `MarsPhotoCard` should display a rover photo, camera name, Earth date, and rover name.
  - Clicking a photo card should navigate to a non-existent detail route, which must display a 404 page.
  - Clicking a photo should open the original NASA image in a new tab (view full image).

- **Photo Detail Page:**

  - Implement a detailed page that displays the full photo, description, camera info, rover info, and any other relevant details.
  - This detailed page must be accessible via a unique route (e.g., `/photo/:id` or similar).

- **Input & Button Components:**

  - The `Input` component must be reusable and used for text/search inputs.
  - The `Button` component must be reusable and used for search and pagination buttons.

- **API Integration & Security:**

  - The app must fetch Mars rover photos using the NASA Mars Rover Photos API.
  - The NASA API key must be stored securely (not in the repo, but in a config or environment variable).
  - The NASA API base URL (`BASE_URL`) must be stored in an environment variable and not hardcoded.
  - Ensure no API keys are committed to the repository.

- **Code Quality:**

  - The codebase should be free of dead code and unused files.
  - Ensure event listeners and subscriptions are properly cleaned up when components unmount.

- **Mars Rover Photo Gallery:** View a paginated grid of photos from Mars rovers.
- **Filter Photos:** Search by rover name (Curiosity, Opportunity, Spirit, Perseverance) and Martian Sol.
- **Pagination:** Navigate through multiple pages of photo results (25 photos per page, using NASA API pagination).
- **View full image:** Clicking a photo opens the original NASA image in a new tab.

## API Used

This project uses the public API provided by **NASA**, specifically the **Mars Rover Photos API**.

- **API Documentation:** [https://api.nasa.gov/](https://api.nasa.gov/) (look for Mars Rover Photos section)
- **Get an API Key:** [https://api.nasa.gov/](https://api.nasa.gov/) (a key is required)

## Starter Project

You are provided with:

- [Basic project structure and configuration files](https://github.com/alem-platform/frontend/blob/mars-explorer/project/)

## Guidelines from Author

### Understanding the Provided Component Framework (`BaseComponent`)

This project uses a custom **component-based architecture** built around the `BaseComponent` class (`src/core/BaseComponent.ts`). This class is a blueprint for creating reusable UI components.

### Core Concepts of `BaseComponent`

#### 1. Props (`P`) - Configuring Your Components

- **Concept:** Props pass data from a parent to a child component, configuring its appearance and behavior. Props should be treated as read-only by the child.

#### 2. State (`S`) - Managing Internal Data

- **Concept:** State is data managed _internally_ by a component. Changes to state (e.g., from user interaction) can trigger UI updates.
- **In `BaseComponent`:** Update state _only_ with `this.setState()`. This method also tells `BaseComponent` to re-render.

#### 3. `constructor(tagName: string, props: P, initialState: S = {} as S)`

- **Concept:** Initializes a new component instance.

#### 4. `render(): string` - Defining the Visual Output

- **Concept:** Describes the component's UI based on current `props` and `state`.
- **In `BaseComponent`:** This method _must_ be implemented. It returns an HTML string. `BaseComponent` uses this string to set the `innerHTML` of the component's root DOM element. Use Lodash templates (`_.template`) for dynamic HTML.

#### 5. `setState(newState: Partial<S>)` - Triggering UI Updates

- **Concept:** The way to update a component's internal state and signal that its UI needs to refresh.

#### 6. Lifecycle Methods - Hooks into a Component's Life

- **Concept:** [Special functions that run at specific phases of a component's existence.](https://react.dev/learn/synchronizing-with-effects#the-lifecycle-of-reactive-effects)

### Further Learning Resources

- **Component-Based Architecture:**
  - [Thinking in Components (React Docs - conceptual, applies broadly)](https://react.dev/learn/thinking-in-react#thinking-in-components)
- **Props & State in Components:**
  - [Components and Props (React Docs - conceptual)](https://react.dev/learn/passing-props-to-a-component)
  - [State: A Component's Memory (React Docs - conceptual)](https://react.dev/learn/state-a-components-memory)
- **Rendering and DOM Manipulation:**
  - [Rendering and `innerHTML` (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

Feel free to refactor or improve any part of the codebase. The structure provided is just a starting point - make it your own!

## Author

This project has been created by:

Adilyam Tilegenova, Software Developer at Doodocs.kz

Contacts:

- Email: adilyamt@gmail.com
- [GitHub](https://github.com/Adilyam)
- [LinkedIn](https://www.linkedin.com/in/adilyam/)
