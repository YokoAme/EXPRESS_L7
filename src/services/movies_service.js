const { v4: uuidv4 } = require('uuid');
const { readFile, writeFile } = require('../db/file');

const path = './src/db/movies.json';

const getAll = () => readFile(path);

const getById = (id) => {
  const data = readFile(path);
  return data.find(movie => movie.id === id);
};

const create = ({ title, genre, duration, isAvailable, releaseDate }) => {
  const data = readFile(path);

  const newMovie = {
    id: uuidv4(),
    title: title || "Без названия",
    genre: genre || ["Без жанра"],
    duration: duration || 0,
    isAvailable: isAvailable !== undefined ? isAvailable : false,
    releaseDate: releaseDate || new Date().toISOString()
  };

  data.push(newMovie);
  writeFile(path, data);
  return newMovie;
};


const update = (id, body) => {
  const data = readFile(path);
  const index = data.findIndex(movie => movie.id === id);
  if (index === -1) return null;

  const updatedMovie = { id, ...body };
  data[index] = updatedMovie;
  writeFile(path, data);
  return updatedMovie;
};

const updatePart = (id, patch) => {
  const data = readFile(path);
  const movie = data.find(m => m.id === id);
  if (!movie) return null;

  Object.assign(movie, patch);
  writeFile(path, data);
  return movie;
};

const remove = (id) => {
  const data = readFile(path);
  const index = data.findIndex(movie => movie.id === id);
  if (index === -1) return null;

  const [deleted] = data.splice(index, 1);
  writeFile(path, data);
  return deleted;
};

module.exports = { getAll, getById, create, update, updatePart, remove };
