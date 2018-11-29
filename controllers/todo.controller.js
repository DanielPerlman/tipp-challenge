const Todo = require('../models/todo.model');

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
