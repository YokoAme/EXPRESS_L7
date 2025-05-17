const { v4: uuidv4 } = require('uuid');
const { readFile, writeFile } = require('../db/file');

const path = './src/db/sessions.json';

const getAll = () => readFile(path);

const getById = (id) => {
  const data = readFile(path);
  return data.find(session => session.id === id);
};

const create = ({ movieId, room, dateTime, ticketsLeft, is3D }) => {
  const data = readFile(path);

  const newSession = {
    id: uuidv4(),
    movieId: movieId || "unknown",
    room: room || 0,
    dateTime: dateTime || new Date().toISOString(),
    ticketsLeft: ticketsLeft || 0,
    is3D: is3D !== undefined ? is3D : false
  };

  data.push(newSession);
  writeFile(path, data);
  return newSession;
};

const update = (id, body) => {
  const data = readFile(path);
  const index = data.findIndex(session => session.id === id);
  if (index === -1) return null;

  const updatedSession = { id, ...body };
  data[index] = updatedSession;
  writeFile(path, data);
  return updatedSession;
};

const updatePart = (id, patch) => {
  const data = readFile(path);
  const session = data.find(s => s.id === id);
  if (!session) return null;

  Object.assign(session, patch);
  writeFile(path, data);
  return session;
};

const remove = (id) => {
  const data = readFile(path);
  const index = data.findIndex(session => session.id === id);
  if (index === -1) return null;

  const [deleted] = data.splice(index, 1);
  writeFile(path, data);
  return deleted;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  updatePart,
  remove
};
