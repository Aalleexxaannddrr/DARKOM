const { Schema, model } = require('mongoose')

const Category = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true }
})

module.exports = model('Category', Category)