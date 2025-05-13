# Peer Evaluation Questions: Mars Rover Photo Explorer

## General

- [ ] The project runs without errors in the browser console
- [ ] There are no linter errors or warnings when running `npm run lint`
- [ ] No API keys are committed to the repository
- [ ] Only allowed dependencies (TypeScript, Vite/Parcel, Lodash) are used
- [ ] The UI does not crash or freeze unexpectedly during normal use

## Architecture & Code Quality

- [ ] The UI is implemented using reusable components that extend `BaseComponent`
- [ ] Each component manages its own state and updates the UI reactively
- [ ] The code is organized and easy to follow
- [ ] Event listeners and subscriptions are properly cleaned up when components unmount
- [ ] ESLint mandatory rules (semi, no-console, no-unused-vars, no-var, no-undef) are followed

## Features & Functionality

- [ ] The app fetches and displays Mars rover photos using the NASA Mars Rover Photos API
- [ ] The user can filter photos by rover name and Martian Sol
- [ ] There is a search button that triggers a new API request
- [ ] Photos are displayed in a paginated grid
- [ ] Next/Previous buttons work and update the gallery
- [ ] Loading and error states are handled gracefully in the UI
- [ ] The Mars Rover Search Page displays a paginated grid of photo previews using `MarsPhotoCard` components
- [ ] The Mars Rover Search Page includes input fields for rover name and Martian Sol
- [ ] The Mars Rover Search Page includes pagination controls (Next/Previous buttons)
- [ ] The Mars Rover Search Page features a search button to fetch photos
- [ ] The Mars Rover Search Page handles loading and error states during API calls
- [ ] The Mars Photo Card component displays a rover photo, camera name, Earth date, and rover name
- [ ] The Input component is reusable and used for text/search inputs
- [ ] The Button component is reusable and used for search and pagination buttons
- [ ] The UI re-renders components (via `setState` and the `update` cycle in `BaseComponent`) when data changes (e.g., new photo list from API, search results, pagination)
- [ ] There is a way to view the full-size image by clicking a photo, which opens the NASA image in a new tab
- [ ] When the user clicks the search button, a new request is made to the NASA API and results are updated
- [ ] The gallery displays 25 photos per page
- [ ] Pagination is implemented using the NASA API's page parameter
- [ ] Photos are shown/loaded on initial page load (not an empty page)
- [ ] The default rover is "curiosity" and the default Martian Sol is 1000
- [ ] Clicking a photo card navigates to a non-existent detail route, which displays a 404 page
- [ ] Any unregistered route displays a 404 page

## Best Practices

- [ ] The NASA API key is stored securely (not in the repo, but in a config or environment variable)
- [ ] The codebase is free of dead code and unused files
- [ ] The NASA API base URL (BASE_URL) is stored in an environment variable and not hardcoded
- [ ] All input fields have associated <label> elements for accessibility
