# 🎬 API для кинотеатра

Лабораторная работа №7  
Вариант: **2 - Кинотеатр**  


---

## 📂 Структура проекта

```
├── app.js
├── .env
├── src
│   ├── controllers
│   ├── db
│   ├── routes
│   └── services
```

---

## 🚀 Как запустить

```bash
npm install
npm run dev
```

Сервер работает на `http://localhost:5000/index.html` `(http://localhost:5000)`

---

## ⚙️ .env

```env
PORT=5000
```

---

## 📦 Сущности

### 🎥 Фильмы

Путь: `/movies`

Поля:
- `id` — string
- `title` — string
- `genre` — array
- `duration` — number
- `isAvailable` — boolean
- `releaseDate` — string (дата)

Методы:
- `GET /movies`
- `GET /movies/:id`
- `POST /movies`
- `PUT /movies/:id`
- `PATCH /movies/:id`
- `DELETE /movies/:id`

---

### 🕒 Сеансы

Путь: `/sessions`

Поля:
- `id` — string
- `movieId` — string
- `room` — number
- `dateTime` — string (дата)
- `ticketsLeft` — number
- `is3D` — boolean

Методы:
- `GET /sessions`
- `GET /sessions/:id`
- `POST /sessions`
- `PUT /sessions/:id`
- `PATCH /sessions/:id`
- `DELETE /sessions/:id`

---

## 📌 Особенности

- Все данные хранятся в `.json` файлах
- Используется `uuid` для ID

---
