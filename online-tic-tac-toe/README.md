# online-tic-tac-toe

<!--
## Prerequisies
- [FrontEnd](https://en.wikipedia.org/wiki/Front-end_web_development)
- [BackEnd](https://en.wikipedia.org/wiki/Frontend_and_backend#Backend_focused)
-->

## Learning Objectives

- [HTTP](https://en.wikipedia.org/wiki/HTTP)
- [Client & Server communication](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)

## Abstract

In this project, you will implement a multiplayer online Tic Tac Toe with key features:

- Finding opponents for online Tic Tac Toe matches
- Playing Tic Tac Toe online against other players
- Playing Tic Tac Toe offline in local mode

## Context

### What's Tic Tac Toe?

Tic Tac Toe (also known as Noughts and Crosses or X's and O's) is a simple and classic two-player game. The goal is for a player to form a straight line of three of their symbols (either X or O) on a 3x3 grid.

### Why This Project?

This pet project will help you dive into real-world web development by creating an online multiplayer game. While Tic Tac Toe might seem simple at first glance, implementing its online version will expose you to many essential concepts in modern web development.

You'll work with both **frontend** and **backend** technologies, learning how they interact in a real application. By doing this project, you will see most types of communication methods (`HTTP`, `Web Socket`, `SSE`, etc.) of web applications.

## Resources

- [Tic-Tac-Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Multiplayer video game](https://en.wikipedia.org/wiki/Multiplayer_video_game)
- [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [WebSocket](https://javascript.info/websocket)
- [Long Polling](https://javascript.info/long-polling)
- [Server Sent Events](https://javascript.info/server-sent-events)
- [JSON](https://en.wikipedia.org/wiki/JSON)

## General Criteria

- The project is a web application.
- The project written in one repository.
- Clear `README` with project setup instructions and environment requirements.
- If the application crashes unexpectedly during the review, you will receive a `0`.
- The project runs without errors in the console on a modern browser.
- The pages do not contain errors according to [W3C Validator](https://validator.w3.org/).
- Code must follow a standard `ESLint` rules and the mandatory rules listed below:

```json
{
  "semi": "error",
  "no-console": "error",
  "no-unused-vars": "error",
  "no-var": "error",
  "no-undef": "error"
}
```

## Mandatory Part

### Main Page

The main page serves as the entry point for the application.

#### Random Nickname

A random nickname is automatically assigned to each user upon entry. The nickname must be unique for each user.

#### Real-time status indicators

The main page should contain:

- Total number of users currently online
- Number of active games in progress

Statistics must update **at least once per minute**. Zero values **may be** hidden.

#### Available game modes on the main page

- [Quick Game](#quick-game-mode)
- [Offline Game](#offline-game-mode)

### "Quick Game" Mode

The following describes the complete flow of the online quick game mode.

#### 1. Game Search Flow

| #   | State        | Action             | Description                                                                                           |
| --- | ------------ | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 01  | Main Page    | Click "Quick Game" | Initiates search for another player.                                                                  |
| 02  | Searching    | -                  | Matches are made from the pool of players also searching for games.<br><br>Displays buttons: "Cancel" |
| 02  | Searching    | Click "Cancel"     | Search is cancelled, user returns to the main page.                                                   |
| 03  | Player Found | -                  | Automatic transition to the game room with the matched player.                                        |

#### 2. Gameplay Flow

| #   | State            | Action                    | Description                                                                                                            |
| --- | ---------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 01  | Game Start       | -                         | Random assignment of symbols (X or O) to determine who goes first.                                                     |
| 02  | Game In Progress | Players take turns        | Players alternate making moves according to standard Tic-tac-toe rules.                                                |
| 03  | Game Over        | -                         | Displays game result: win/loss/draw<br><br>Shows game score<br><br>Displays buttons: "Play Again", "Back to Main Menu" |
| 03  | Game Over        | Click "Play Again"        | - Restarts the game (reassignment of X/O is optional)<br>- Button becomes disabled if the opponent leaves the game     |
| 03  | Game Over        | Click "Back to Main Menu" | Returns to the main page                                                                                               |

**Important Notes:**

- If a player disconnects or leaves during the game, the match ends immediately.
- Remaining player receives a notification about opponent's departure.

### "Offline Game" Mode

The following describes the flow of the local offline game mode.

| #   | State            | Action               | Description                                                                                                                                                        |
| --- | ---------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 01  | Main Page        | Click "Offline Game" | Transitions to offline game mode                                                                                                                                   |
| 02  | Game In Progress | -                    | Standard Tic-tac-toe gameplay<br><br>Shows winner notification on game completion<br><br>Automatically starts new game<br><br>"Back to Main Menu" button available |
| 03  | Any State        | Click "Back to Main" | Returns to the main page                                                                                                                                           |

**Additional Offline Features:**

- Simple statistics tracking (wins/losses/draws)

### Important

- The name of the buttons is at your discretion. The main thing is that the names convey the main meaning.
- In case of client errors, the user must be notified about them. (Network error, user exited the game, etc.)
- You are not limited to these features, additional features are welcome.

## Guidelines from Author

### Use different methods of `HTTP`

For this project implementation, I recommend utilizing different types of HTTP requests and communication methods:

- Use `Long Polling` for features like displaying online players and game statistics
- Implement `WebSocket` for real-time gameplay and instant updates
- Consider using regular `HTTP` methods (`GET`, `POST`, `PUT`, `DELETE`) for other functionality
- For observer mode use `SSE` (For the future)

The choice of specific methods for each feature is up to you, but try to gain experience with different communication approaches throughout the project.

### Teamwork

You can write the back and front yourself, but I recommend that in this project it be divided into 2 people (1 back, 1 front). This split allows each developer to focus on their strengths while learning valuable team collaboration skills.

## Author

This project has been created by:

Dias Kappassov, FrontEnd Developer at Doodocs.kz

Contacts:

- [LinkedIn](https://linkedin.com/in/diaskappassov)
- [GitHub](https://github.com/Dias1c)
- Email: [kappassov@doodocs.kz](mailto:kappassov@doodocs.kz)

```

```
