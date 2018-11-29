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

// Return all events in chronological order (descending)
exports.events_get_all = function (req, res) {
    Event.find({}).sort('-date').exec(function (err, events) {
        res.send(events);
    });
};
