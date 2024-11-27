<!-- 
    Tip: project name here
-->
# Task Planner

## Learning Objectives

<!-- 
    Tip: here you must be a list of learning objectives
    that cover your project
-->

- HTML/CSS Basics
- DOM
- Browser API
- Browser Storage
- Events
- URL

## Abstract

<!-- 
    Tip: Write a short description of what student
    will do during this project.
-->

In this project, you will create a browser application called `task-planner` to:

- Make a list of tasks to track progress.
- Mark tasks as completed.
- Filter tasks.
- Sort the task list.
- Select multiple tasks to perform various operations on them.
- Drag and drop tasks to change their positions.
- Persist the task list across browser reloads.
- Reflect application's state in the URL.

## Context

Learning to manipulate the browser and its [DOM](https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model) is essential on your frontend development journey. The browser works by utilizing events, so you should adjust your mental model to get used to it.

## Resources

<!-- Tip: useful resources here -->
- [Structuring the web with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
- [Event bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
- [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)

## General Criteria

- Your HTML MUST pass [W3C HTMLvalidator](https://validator.w3.org)
- Your CSS MUST pass [W3C CSS Validation](https://jigsaw.w3.org/css-validator/)
- CSS must work on the latest versions of Chrome, Firefox, and Safari
- JavaScript Code MUST follow a standard ESLint rule.
- The project MUST run without errors in the console on a modern browser (e.g., Chrome, Firefox, Edge).
- Your code MUST NOT crash or throw runtime exceptions (e.g., undefined errors, TypeError, etc.).
- No external packages or CDN imports are allowed (other than mandatory polyfills or fonts).
- Only vanilla HTML, CSS, and JavaScript are allowed. No external libraries or frameworks (e.g., jQuery, React, Bootstrap) are permitted unless explicitly specified.
- If the application crashes unexpectedly during the review, you will receive a 0.

## Mandatory Part

### Task List

Create a simple to-do list application that allows users to:

- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed.
- Filter tasks based on their completion status.

The application should have a user-friendly interface.

### Sort

Implement sorting functionality to allow users to sort tasks based on different criteria. Users should be able to:

- Sort tasks alphabetically by their title.
- Sort tasks by their creation date.
- Sort tasks by their completion status.

Ensure that the sorting options are easily accessible and that the task list updates immediately when a sorting option is selected. The selected sorting order should persist across browser reloads.

### Drag and drop functionality

Implement drag and drop functionality to allow users to reorder tasks within the list. Users should be able to:

- Drag a task to a new position within the list.
- Drop the task at the desired position.
- The task list should update to reflect the new order.

Ensure that the drag and drop interactions are smooth and intuitive. The updated order of tasks should persist across browser reloads.

### Multi-select

Implement multi-select functionality to allow users to select multiple tasks using the Shift key. Users should be able to:

- Click on a task to select it.
- Hold down the Shift key and click on another task to select all tasks between the first and second clicked tasks.
- Perform actions (e.g., delete, mark as completed) on all selected tasks simultaneously.

Ensure that the multi-select interactions are intuitive and similar to the behavior found in email clients like Gmail.

### Reflecting application state in the URL

Update the URL to reflect the current state of the application. Users should be able to:

- Share the URL to allow others to see the same state of the task list.
- Bookmark the URL to return to the same state later.

Ensure that the URL updates dynamically as the user interacts with the application, including changes to the task list, sorting order, and filter settings.

## Support

<!--
    Tip: leave this section unchanged.
    This is a static text, which student must read in every project.
-->

If you get stuck, try your code with the example inputs from the project. You should get the same results. If not, read the description again. Maybe you missed something, or your code is wrong. After the examples work, but your answer is still wrong, make some test cases you can check by hand. See if they work with your code. Use the complete example input.

If you are still stuck, ask a friend for help or take a break and come back later.

## Guidelines from Author

Learn to use DevTools in your browser. They will show you what styles are applied and how DOM elements are rendered, what's inside Browser Storage. You can even debug your code in the browser by adding `debugger;` in your code, which will pause the application upon execution.

## Author

This project has been created by:

Bakdaulet Yelmurzayev, alumni of Alem School

Contacts:

- [Telegram: @Pashtetium](https://t.me/pashtetium)
- [LinkedIn](https://www.linkedin.com/in/bakdaulet-yelmurzayev-b25bb820b/)
