const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model('Record', recordSchema);