const express = require('express');
const router = express.Router();

const todo_controller = require('./controllers/todo.controller');

router.post('/create', todo_controller.todo_create);
router.delete('/:id/delete', todo_controller.todo_remove);
router.put('/:id/update_status', todo_controller.todo_update_status);

module.exports = router;
