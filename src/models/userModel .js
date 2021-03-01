'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: Date,
  },

  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', schema)