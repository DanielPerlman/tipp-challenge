const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Imports routes for the todos

const app = express();

// Set up mongoose connection
let dev_db_url = 'mongodb://root:rotiman100@ds119734.mlab.com:19734/todos_api';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Express routes setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todos', routes);

const port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
