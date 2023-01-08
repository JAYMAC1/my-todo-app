const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  comeplete: {
    type: Boolean,
    require: true,
    default: false,
  },
})

module.exports = mongoose.model('Todos', todoSchema)
