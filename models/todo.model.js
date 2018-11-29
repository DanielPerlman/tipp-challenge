const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
  description: {type: String},
  done: {type: Boolean, default: false},
  removedAt: {type: Date}
});

module.exports = mongoose.model('Todo', TodoSchema);
