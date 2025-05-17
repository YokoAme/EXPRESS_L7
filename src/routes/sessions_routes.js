const express = require('express');
const router = express.Router();
const controller = require('../controllers/sessions_controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.updatePart);
router.delete('/:id', controller.remove);

module.exports = router;
