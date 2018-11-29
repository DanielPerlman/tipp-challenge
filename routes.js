const express = require('express');
const router = express.Router();

const todo_controller = require('./controllers/todo.controller');

router.post('/create', todo_controller.todo_create);

module.exports = router;
