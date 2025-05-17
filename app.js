require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const moviesRouter = require('./src/routes/movies_routes');
const sessionsRouter = require('./src/routes/sessions_routes');

app.use(express.json());
app.use('/movies', moviesRouter);
app.use('/sessions', sessionsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));
app.get('/', (req, res) => {
  res.send('Добро пожаловать в API кинотеатра!');
});
