const Event = require('../models/event.model');

exports.event_create = function (eventName, todoId) {
    let event = new Event(
        {
            name: eventName,
            todo: todoId
        }
    );

    event.save(function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('Event added successfully')
    })
};
