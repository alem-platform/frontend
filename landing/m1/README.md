# landing-m1: Fixed Layout

## Learning Objectives

- HTML fundamentals
  - Semantic HTML
- CSS fundamentals
  - Grid & Flexbox for layout structuring
  - Block, inline, and inline-block elements
  - Positioning
  - Pseudo-elements & pseudo-classes
- Chrome DevTools

## Abstract

In this project, you will create a structured semantic web pages using HTML and CSS.

## Context

Web development starts with a strong foundation in HTML and CSS. Understanding how to structure, style, and debug your pages is crucial. This module will give you hands-on experience with real-world techniques, making your websites visually appealing and structurally sound.

## General Criteria

- Use semantic HTML.
- The project must be written in vanilla HTML and CSS.
- You cannot use any other external CSS libraries or preprocessors (e.g., Bootstrap, Tailwind, Pug, SCSS, or LESS).
- The project must run without errors in the console on a modern browser.
- Ensure cross-browser compatibility.
- The website must pass the [W3C HTML](https://validator.w3.org/) & [CSS validator](http://jigsaw.w3.org/css-validator/).

## Mandatory Part

You need to create Main and Projects pages according to the [Design in Figma](#TODO) (only `Main w1440` and `Projects w1440`).

- Achieve a pixel-perfect match with the provided design.

### Semantic

Build the pages using [semantically meaningful HTML5](https://www.w3schools.com/html/html5_semantic_elements.asp) elements.

Build a multi-section static web page using semantic HTML `<header></header>`, `<nav></nav>`, `<ul></ul>`, `<main></main>`, `<footer></footer>, <h1>...<h6>` etc.

```html
<!-- Bad -->
<div class="top-bar">
  <div class="menu-item">Home</div>
</div>

<!-- Good -->
<header>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
    </ul>
  </nav>
</header>
```

### Header

Implement a header that remains fixed at the top of the viewport while scrolling.

### Projects Section

Use grid or flexbox for projects section.

## Buttons and links

All buttons and links must have hover effects and click functionality to enhance user interaction.

- The "About" button must scroll to the "About" section at the main page.
- The "Projects" button must navigate to the "projects" page.
- The "FAQ" button must scroll to the "FAQ" section at the main page.
- The "Contact Us" button must scroll to the "contact us" section at the main page.
- The "Logo" must navigate to the Main page.

The specific links (e.g., social media profiles, geolocation links) are at your discretion.

- Clicking on a phone number must initiate a call on mobile devices
- Clicking on the address must open a map with the location shown (e.g., Google Maps)
- Clicking on a contact email must open the default email client with the address filled in

Every external link must open in a **new tab** when clicked.

## Support

**Before Starting**

If you’d like to familiarize yourself with HTML and CSS, you can take these courses:

- [HTML, code-basics](https://code-basics.com/languages/html)
- [CSS, code-basics](https://code-basics.com/languages/css)

They provide enough foundational knowledge to get started with web development.

Also If you don't understand how grid and flexbox works, understand playing the games:

- [grids](https://cssgridgarden.com)
- [flexboxes](https://flexboxfroggy.com)

**DevTools will help you**

During development, you’ll encounter issues like overlapping styles, missing elements, or unexpected behavior. Chrome DevTools is your go-to tool for solving these problems. It’s one of the most essential tools for frontend developers, and mastering it early will save you countless hours.

- [Google DevTools Guide](https://developer.chrome.com/docs/devtools)

For now, it’s enough to learn about Inspect Elements:

- [Inspect DOM](https://developer.chrome.com/docs/devtools/dom)
- [Inspect CSS](https://developer.chrome.com/docs/devtools/css)

**Speed up your workflow**

Use [emmet](https://emmet.io) to for writing HTML and CSS faster using shortcuts. By default It’s built into most modern code editors (like VSCode).

- [Emmet Official Documentation](https://emmet.io)
- [Emmet Cheatsheet](https://docs.emmet.io/cheat-sheet/)

**Naming system for CSS**

To keep your CSS clean and maintainable, consider using BEM (Block, Element, Modifier). It's a naming convention that helps you structure your classes and avoid conflicts.

- [BEM Methodology](https://bem.info/methodology/)

**Method of checking your work**

To ensure your work matches the design perfectly, use the browser extensions. For example [Pixel Perfect extension](https://chromewebstore.google.com/search/Pixel%20perfect)
