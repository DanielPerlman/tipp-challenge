const Todo = require('../models/todo.model');
const event_controller = require('./event.controller');

exports.todo_create = function (req, res) {
    let todo = new Todo(
        {
            description: req.body.description
        }
    );

    todo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Todo added successfully')
    })
};

// Find specified document and set removed to current date and time.
exports.todo_remove = function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, {$set: {removedAt: Date.now()}}, function (err, todo) {
        if (err) return next(err);
        res.send('Todo removed.');
    });
};

// Find specified document and mark as done or not based on param
exports.todo_update_status = function (req, res) {
    Todo.findOneAndUpdate(req.params.id, {$set: {done: req.body.done}}, function (err, todo) {
        if (err) return next(err);
        let markedText = req.body.done == 'true' ? 'marked' : 'unmarked';
        res.send(`Todo ${markedText} as done.`);
    });
};
