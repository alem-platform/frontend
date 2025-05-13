# Mars Explorer

## Learning Objectives

By completing this project, you will:

- Build a functional **Single Page Application (SPA)** from scratch using **TypeScript**.
- Understand challenges of managing **state**, **UI updates**, and **navigation** in a SPA.
- Implement a **component-based architecture** with lifecycle management.
- Integrate a **public third-party API** (NASA Mars Rover Photos) for data fetching.
- Use **templating** (Lodash `_.template`) for dynamic HTML generation.

## Abstract

In this project, you will build a **Mars Explorer** that allows users to:

- Browse photos taken by NASA's [Mars rovers](https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/) (Curiosity, Opportunity, Spirit, Perseverance).
- Filter photos by rover name and [Martian Sol (day)](https://en.wikipedia.org/wiki/Mars_sol).
- View a gallery of photos.
- Handle loading states and potential API errors.

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
- [NASA Mars Rover Photos API Documentation](https://api.nasa.gov/) (specifically the Mars Rover Photos section)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

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

  - All UI elements are implemented as reusable components (`MarsPhotoCard`, `Input`, `Button`, `PageMarsRoverSearch`) extending `BaseComponent`.
  - Each component manages its own state and updates the UI reactively.
  - Dynamic rendering: Uses Lodash templates for page structure and renders child components in the correct DOM locations.

- **SPA & Routing:**

  - The application uses a client-side router for navigation (hash-based or similar SPA routing).
  - Navigating to a route loads the correct component and updates the view without a full page reload.
  - Any unregistered route (including photo detail routes) should display a 404 page.

- **Mars Rover Search Page:**

  - Displays a paginated grid of photo cards using `MarsPhotoCard` components.
  - Includes input fields for rover name and Martian Sol, each with an associated `<label>` for accessibility.
  - Includes pagination controls (Next/Previous buttons).
  - Features a search button to fetch photos.
  - Handles loading and error states in the UI.
  - On initial page load, photos are automatically loaded and displayed (not an empty page).
  - The default rover is "curiosity" and the default Martian Sol is 1000.
  - When the user clicks the search button, a new request is made to the NASA API and results are updated.

- **Pagination:**

  - The gallery displays 25 photos per page (using NASA API pagination).
  - Pagination is implemented using the NASA API's `page` parameter.
  - Next/Previous buttons work and update the gallery.

- **Photo Card:**

  - Each `MarsPhotoCard` displays a rover photo, camera name, Earth date, and rover name.
  - Clicking a photo card navigates to a non-existent detail route, which should display a 404 page.
  - Clicking a photo opens the original NASA image in a new tab (view full image).

- **Photo Detail Page:**

  - The detailed page displays the full photo, description, camera info, rover info, and any other relevant details.
  - The detailed page is accessible via a unique route (e.g., `/photo/:id` or similar).

- **Input & Button Components:**

  - The `Input` component is reusable and used for text/search inputs.
  - The `Button` component is reusable and used for search and pagination buttons.

- **API Integration & Security:**

  - The app fetches Mars rover photos using the NASA Mars Rover Photos API.
  - The NASA API key is stored securely (not in the repo, but in a config or environment variable).
  - The NASA API base URL (`BASE_URL`) is stored in an environment variable and not hardcoded.
  - No API keys are committed to the repository.

- **Code Quality:**
  - The codebase is free of dead code and unused files.
  - Event listeners and subscriptions are properly cleaned up when components unmount.

## API Used

This project uses the public API provided by **NASA**, specifically the **Mars Rover Photos API**.

- **API Documentation:** [https://api.nasa.gov/](https://api.nasa.gov/) (look for Mars Rover Photos section)
- **Get an API Key:** [https://api.nasa.gov/](https://api.nasa.gov/) (a key is required)

## Features

- **Mars Rover Photo Gallery:** View a paginated grid of photos from Mars rovers.
- **Filter Photos:** Search by rover name (Curiosity, Opportunity, Spirit, Perseverance) and Martian Sol.
- **Pagination:** Navigate through multiple pages of photo results (25 photos per page, using NASA API pagination).
- **View full image:** Clicking a photo opens the original NASA image in a new tab.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- **Vite/Parcel:** You may use either as your build tool.
- **NASA API Key:** You will need to obtain a free API key from [https://api.nasa.gov/](https://api.nasa.gov/) and configure it in `NasaMarsApiService.ts`.
- **BASE_URL:** You must set `BASE_URL=https://api.nasa.gov/mars-photos/api/v1` in your `.env` file (do not hardcode in code).

## Starter Project

You are provided with:

- `BaseComponent.ts`: An abstract class for building components.
- `EventBus.ts`: A simple event emitter for component communication.
- Basic project structure and configuration files.

## Guidelines from Author

1. **Component Lifecycle**: Pay attention to cleanup in your components. Memory leaks are a pain - make sure to remove event listeners and clear subscriptions when components unmount.

2. **State Management**: Keep it simple. The EventBus pattern works great for this scale. Don't over-engineer with complex state management unless you really need it.

3. **Error Boundaries**: Implement proper error handling and fallbacks.

4. **API Keys**: Never commit API keys. Use environment variables or a config file that's gitignored.

Feel free to refactor or improve any part of the codebase. The structure provided is just a starting point - make it your own!

## Author

This project has been created by:

Adilyam Tilegenova, Software Developer at Doodocs.kz

Contacts:

- Email: adilyamt@gmail.com
- [GitHub](https://github.com/Adilyam)
- [LinkedIn](https://www.linkedin.com/in/adilyam/)
