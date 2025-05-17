const service = require('../services/sessions_service');

const getAll = (req, res) => {
  res.json(service.getAll());
};

const getById = (req, res) => {
  const session = service.getById(req.params.id);
  if (!session) return res.status(404).json({ error: 'Not found' });
  res.json(session);
};

const create = (req, res) => {
  const session = service.create(req.body);
  res.status(201).json(session);
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

module.exports = {
  getAll,
  getById,
  create,
  update,
  updatePart,
  remove
};
