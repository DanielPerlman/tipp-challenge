const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventSchema = new Schema({
  name: {type: String},
  todo: {type: mongoose.Schema.Types.ObjectId, ref: 'Todo'},
  date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Event', EventSchema);
