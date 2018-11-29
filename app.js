const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

const todo = require('./routes/todo.route'); // Imports routes for the todos
app.use('/todos', todo);

const port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
