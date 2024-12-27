# online-tic-tac-toe

## Prerequisies

- [FrontEnd](https://en.wikipedia.org/wiki/Front-end_web_development)
- [BackEnd](https://en.wikipedia.org/wiki/Frontend_and_backend#Backend_focused)

## Learning Objectives

- [HTTP](https://en.wikipedia.org/wiki/HTTP)
- [Client & Server communication](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)

## Abstract

In this project, you will implement a multiplayer online Tic Tac Toe with key features:

- Finding opponents for online Tic Tac Toe matches
- Playing Tic Tac Toe online against other players
- Playing Tic Tac Toe offline in local mode

## Context

### Why This Project?

This pet project will help you dive into real-world web development by creating an online multiplayer game. While Tic Tac Toe might seem simple at first glance, implementing its online version will expose you to many essential concepts in modern web development.

You'll work with both frontend and backend technologies, learning how they interact in a real application. By doing this project, you will see most types of communication methods (HTTP, web socket, SSE, etc.) of web applications.

### Whats Tic Tac Toe?

Tic Tac Toe (also known as Noughts and Crosses or X's and O's) is a simple and classic two-player game. The goal is for a player to form a straight line of three of their symbols (either X or O) on a 3x3 grid.

## Resources

- [Tic-Tac-Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Multiplayer video game](https://en.wikipedia.org/wiki/Multiplayer_video_game)
- [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [WebSocket](https://javascript.info/websocket)
- [Long Polling](https://javascript.info/long-polling)
- [Server Sent Events](https://javascript.info/server-sent-events)
- [JSON](https://en.wikipedia.org/wiki/JSON)

## General Criteria

В readme есть информация о том как запускать проект

## Mandatory Part

### Entry Point

Входной точкой должна быть основная страница.

Пользователю автоматически присваивается рандомный никнейм.

На основной странице, для пользователя будет доступно:

- [Быстрая игра](#Быстрая-игра)
- [Офлайн игра](#Играть-оффлайн)

### Режим "Быстрая игра"

Далее описан флоу быстрой игры.

#### 1. Поиск игры

| #   | Состояние         | Действие             | Описание                                                                                                                         |
| --- | ----------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 01  | Основная страница | Нажал "Быстрая игра" | Запускается поиск второго игрока.<br/><br/>Выборка игроков происходит из таких же игроков у которых идет поиск в "быстрой игре". |
| 02  | Идет поиск        | Нажал "Отмена"       | Поиск прекращается, возврат на основную страницу.                                                                                |
| 03  | Игрок найден      | -                    | Автоматический переход в игровую комнату с найденным игроком                                                                     |

#### 2. Процесс игры

| #   | Состояние      | Действие                     | Описание                                                                                                                                               |
| --- | -------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 01  | Начало игры    | -                            | Случайным образом определяется кто ходит первым (X или O).                                                                                             |
| 02  | Идет игра      | Игроки поочередно делают ход | Игроки поочередно делают ход по правилам tic-tac-toe.                                                                                                  |
| 03  | Игра завершена | -                            | Показывается результат последней игры: победа/поражение/ничья<br><br>Показывается счет игры.<br><br>Показывается кнопки: "повторить", "в главное меню" |
| 03  | Игра завершена | Нажал "Повторить"            | Перезапускается игра (Переопределение X или O) не обязательна.<br><br>Кнопка становится недоступной если второй игрок вышел из игры.                   |
| 03  | Игра завершена | Нажал "В главное меню"       | Переход на основную страницу.                                                                                                                          |

> В случае если один из игроков выхдит из игры, партия завершается, с уведомлением о том что второй игрок вышел из игры.

### Режим "Офлайн игра"

Далее описан флоу офлайн игры.

| #   | Состояние         | Действие               | Описание                                                                                                                                                                          |
| --- | ----------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | Основная страница | Нажал "Офлайн игра"    | Переход в режим офлайн игры                                                                                                                                                       |
| 02  | Идет игра         | -                      | Обычный флоу офлайн игры пр правилам tic-tac-toe. При завершении партии, показывается уведомление кто выйграл, и игра начинается заново.<br><br>Доступны кнопки: "В главное меню" |
| 02  | Идет игра         | Нажал "В главное меню" | Переход на основную страницу                                                                                                                                                      |

## Guidelines from Author

I strongly recommended to use dirrerent network methods.
For example:

- http base methods
- SSE to recive total online users and now playing users.
- WebSocket on playing game tic-tac-toe
- ...

## Author
