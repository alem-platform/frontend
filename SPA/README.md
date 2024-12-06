Got it! Here's your updated project description with the addition of **"Templating with Lodash"**, seamlessly integrated into the context and mandatory sections while maintaining the flow and purpose of the original description.

---

# Real-Time Blog SPA

## Learning Objectives

By completing this project, you will:

- Build a fully functional **Single Page Application (SPA)** from scratch using **TypeScript**.
- Understand the challenges of managing **state**, **UI updates**, and **navigation** in a modern web app.
- Implement a **component-based architecture** with lifecycle management.
- Create a **custom client-side router** for seamless navigation between views.
- Integrate **WebSockets** for real-time updates across clients.
- Utilize **templating** for dynamic HTML generation with **Lodash's `_.template`**.
- Gain experience with **asynchronous programming** and event-driven architectures.

---

## Abstract

In this project, you will build a **Real-Time Blog Application** that allows users to:

- View, create, edit, and delete blog posts.
- Navigate between different views without page reloads (client-side routing).
- Use **WebSockets** to handle real-time updates, ensuring all users see the latest content instantly.

You will extend a provided **starter project** that includes a basic `Component` class written in **TypeScript** and integrate **Lodash’s templating** functionality for dynamic HTML rendering.

---

## Context

### The Problem with Imperative JavaScript

Traditional web development often relies on **imperative DOM manipulation** to update the UI:

```js
const postList = document.querySelector("#post-list");
const newPost = document.createElement("div");
newPost.textContent = "New Blog Post";
postList.appendChild(newPost);
```

This approach can work for small applications, but it quickly becomes problematic:

1. **Hard to Maintain**:  
   As the application grows, manually manipulating the DOM becomes increasingly difficult to manage and debug.

2. **Tightly Coupled Logic and UI**:  
   HTML structure is often mixed with JavaScript logic, leading to tightly coupled code that is harder to read and maintain.

3. **Code Repetition**:  
   Repeatedly writing DOM manipulation code across different parts of the application leads to duplication and increased complexity.

---

### The Solution: Component-Based Architecture and Templating

To address these issues, modern web applications use **component-based architecture** combined with **templating**:

- **Components**:  
  Break down the UI into small, reusable components, each responsible for rendering a specific part of the interface.

- **Templating**:  
  Use a templating engine to dynamically generate HTML based on data and state, improving the separation of concerns and simplifying UI updates.

---

### Templating with Lodash

In this project, you will use **Lodash’s `_.template`** function to render dynamic HTML. Lodash’s templating engine allows you to:

1. **Separate HTML from JavaScript Logic**:  
   Keep your HTML structure in templates and your logic in TypeScript, improving readability and maintainability.

2. **Reuse Templates Across Components**:  
   Create reusable templates for common UI elements like blog posts, comments, and forms.

3. **Simplify Dynamic Content Rendering**:  
   Instead of manually updating the DOM, re-render templates with new data when the state changes.

---

### Example: Using Lodash Templating

Instead of manually creating and updating HTML elements, you can define a template:

```html
<script type="text/template" id="post-template">
  <div class="post">
    <h2><%= title %></h2>
    <p><%= content %></p>
    <span>Posted by <%= author %></span>
  </div>
</script>
```

And render it dynamically using Lodash’s `_.template`:

```js
const template = _.template(document.getElementById("post-template").innerHTML);

const postHTML = template({
  title: "My First Blog Post",
  content: "This is the content of the blog post.",
  author: "John Doe",
});

document.querySelector("#post-list").innerHTML += postHTML;
```

This approach:

- **Reduces Boilerplate Code**: Automates HTML generation, reducing repetitive DOM manipulation.
- **Improves Readability**: Keeps the HTML structure clean and separate from business logic.
- **Facilitates State Updates**: Allows easy re-rendering of components when data or state changes.

---

## Why Single Page Applications (SPAs)?

SPAs go beyond templating by handling all navigation and updates on the client-side without full page reloads, offering:

1. **Faster User Experience**:  
   SPAs provide seamless transitions between views without reloading the page.

2. **Dynamic Content**:  
   SPAs easily display real-time updates, making them ideal for applications like chat systems, dashboards, or, in this case, a blog.

3. **Simplified State Management**:  
   Manage the entire application state on the client, reducing the need for frequent server requests.

---

## Project Overview

### Goal

Build a **Real-Time Blog Application** with the following features:

1. **Component-Based Architecture**:  
   Implement reusable components with lifecycle methods (e.g., `onMount`, `onUpdate`, `onUnmount`).

2. **Client-Side Routing**:  
   Implement a router that allows users to navigate between different views (e.g., homepage, post details, create post) without page reloads.

3. **State Management**:  
   Manage the application state in a centralized way and pass data between components as needed.

4. **WebSocket Integration**:  
   Connect to a WebSocket server to receive real-time updates, ensuring that all users see the latest changes to blog posts.

5. **Dynamic Rendering with Lodash Templates**:  
   Use Lodash’s templating engine to render dynamic HTML content based on the application state.

---

## Mandatory Part

### 1. Core Features

1. **Homepage**:  
   Display a list of all blog posts using a Lodash template.

2. **Post Details**:  
   Display the full content of a selected blog post.

3. **Create and Edit Posts**:  
   Provide a form to create new blog posts and edit existing ones.

4. **Client-Side Routing**:  
   Implement routing to navigate between views without page reloads.

5. **Dynamic UI Updates**:  
   Re-render components and templates when the state changes.

---

### 2. Real-Time Features

1. **WebSocket Integration**:  
   Connect to the provided WebSocket server to receive real-time updates.

2. **Real-Time Post Updates**:  
   Automatically update the blog post list when new posts are created or existing posts are updated by other users.

---

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Lodash `_.template` Documentation](https://lodash.com/docs/4.17.15#template)
- [Introduction to Single Page Applications](https://developer.mozilla.org/en-US/docs/Web/JavaScript/SPA)
- [WebSockets API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

---

## Starter Project

You are provided with a `Component` class written in TypeScript. Your task is to build upon this class to implement:

1. **Custom Lifecycle Hooks** (e.g., `onMount`, `onUpdate`).
2. A **Router** to handle navigation between views.
3. A **State Management System** to manage blog posts.
4. **WebSocket Integration** for real-time updates.
5. **Templating with Lodash** to dynamically render components.

---

This extended description provides a cohesive explanation of why templating is essential, how it solves common issues with DOM manipulation, and how students can leverage it to build scalable SPAs.
