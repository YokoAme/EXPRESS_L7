const service = require('../services/movies_service');

const getAll = (req, res) => res.json(service.getAll());

const getById = (req, res) => {
  const movie = service.getById(req.params.id);
  if (!movie) return res.status(404).json({ error: 'Not found' });
  res.json(movie);
};

const create = (req, res) => {
  const movie = service.create(req.body);
  res.status(201).json(movie);
};

const update = (req, res) => {
  const updated = service.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
};

const updatePart = (req, res) => {
  const patched = service.updatePart(req.params.id, req.body);
  if (!patched) return res.status(404).json({ error: 'Not found' });
  res.json(patched);
};

const remove = (req, res) => {
  const deleted = service.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json(deleted);
};

module.exports = { getAll, getById, create, update, updatePart, remove };
