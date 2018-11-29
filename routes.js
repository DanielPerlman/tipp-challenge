const express = require('express');
const router = express.Router();

const todo_controller = require('./controllers/todo.controller');
const event_controller = require('./controllers/event.controller');

// Todo-specific routes
router.post('/create', todo_controller.todo_create);
router.delete('/:id/delete', todo_controller.todo_remove);
router.put('/:id/update_status', todo_controller.todo_update_status);

// Event-specific routes
router.get('/events', event_controller.events_get_all);

module.exports = router;
