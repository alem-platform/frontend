# landing-m3: Interactivity

## Learning Objectives

- JavaScript fundamentals
- BOM manipulations
- DOM manipulations
- localStorage

## Abstract

In this project, you will enhance your web page by adding interactive features using pure JavaScript:

- Burger Menu
- "Scroll to top" button (smooth scrolling, display on)
- Slider
- Accordion for FAQ
- Saved "theme"
- Random "Projects" block
- Filter for "Projects"
<!-- - Modal Window (TODO) -->

## Context

While HTML provides the structure and CSS handles the presentation, JavaScript was created to enable functionality that goes beyond static content and styles. It bridges the gap between the user and the webpage by adding interactivity and dynamic behavior. Here are some examples of what JavaScript enables:

- **Dynamic Content Updates**: For instance, updating a shopping cart total without refreshing the page or displaying live notifications.
- **User Interaction Handling**: Responding to complex user actions like drag-and-drop, multi-step forms, or real-time input validation.
- **State Management**: Remembering user preferences, such as a selected theme or language, even after the browser is closed and reopened.
- **Asynchronous Operations**: Fetching data from a server (e.g., loading new posts on a social media feed) without interrupting the user experience.
- **Advanced Animations**: Creating animations that depend on user input or complex logic, such as interactive games or custom scroll effects.
- **Browser API Integration**: Accessing device features like geolocation, camera, or microphone to create richer experiences.

JavaScript is the backbone of modern web applications, enabling features that make websites feel alive and responsive to user needs.

## General Criteria

- The project must be written in vanilla HTML and CSS.
- You cannot use any other external CSS libraries or preprocessors (e.g., Bootstrap, Tailwind, Pug, SCSS, or LESS).
- The project must run without errors in the console on a modern browser.
- Ensure cross-browser compatibility.
- The website must pass the [W3C HTML](https://validator.w3.org/) & [CSS validator](http://jigsaw.w3.org/css-validator/).
- A pixel-perfect design should be implemented.

## Mandatory Part

You need to enhance the Main and Projects pages from previous parts (`Part 1` & `Part 2`) to be fully interactive.

- [Figma design](https://www.figma.com/design/LjSY8wCfM7vOkzNEhngnOL/Alem-Project-Landing)

### Burger Menu

Implement a responsive burger menu for mobile screens (`599px` and less).

- The menu should toggle visibility when the burger icon is clicked.
- Ensure smooth transitions for the menu appearance and disappearance.
- The menu should include all navigation links and be fully functional.
- When you click any button in the burger menu, the menu must close.
- When changing the viewport width, the open burger menu should close.

### "Scroll to Top" Button

- Add a "Scroll to Top" button that appears when the user has scrolled `300px` from the top of the page.
- The button should smoothly scroll the page to the top when clicked.
- Ensure smooth transitions between slides and avoid abrupt jumps or glitches.

### Slider

Implement a slider component for showcasing content.

- The slider should include navigation controls (navigation dots).
- The slider should automatically switch to the next slide every 3 seconds.
- Automatic switching should pause when the user interacts with the slider (hovers over the slider, or touches and holds the slide content on touch devices). Once the user has finished interacting with the slider, the slider resumes its work.

### Random "Projects" block

Update a "Projects" section where 3 projects are displayed randomly each time the page is loaded or refreshed.

> Use `projects.json` from [landing Assets](./../assets)

### Project Card

Each project card must display the project the project duration. The duration should be displayed in a user-friendly format:

- **Days**: If the project lasted less than a week (but more than one day), display the duration in days (e.g., `"3 days"`).
- **Weeks**: If the project lasted more than a week but less than a month, display the duration in weeks (e.g., `"2 weeks"`).
- **Months**: If the project lasted more than a month, display the duration in months (e.g., `"5 months"`).

### Filter in "Projects" page

Implement the filter to dynamically update the displayed projects.

- All - display all projects
- Websites - displays only projects with Website tag
- Applications - displays only projects with Application tag

> Use `projects.json` from [landing Assets](./../assets)

### Accordion for FAQ

Implement an accordion component for the FAQ section.

- Each accordion item should expand/collapse when clicked.

### Saved "Theme"

Extend the theme switching functionality from Part 2 to save the user's theme preference.

- Ensure the user selected theme is applied automatically when the user revisits the website.

## Support

**Before Starting**

If you need to brush up on JavaScript fundamentals and DOM manipulation, consider the following resources:

- [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Event Handling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [CSS Transitions and Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

**DevTools will help you**

Use Chrome DevTools to debug and test your JavaScript code and interactive features:

- [Debugging JavaScript](https://developer.chrome.com/docs/devtools/javascript/)
- [Inspect and Modify the DOM](https://developer.chrome.com/docs/devtools/dom/)
- [Test Responsive Design](https://developer.chrome.com/docs/devtools/device-mode/)

## Suggestions

Have ideas for improvement? Feel free to create an [issue here](https://github.com/alem-platform/frontend/issues)!
