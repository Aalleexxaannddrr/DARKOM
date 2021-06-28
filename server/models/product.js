const { Schema, model } = require('mongoose')

const Product = new Schema({
  name: { type: String, required: true },
  category_id: { type: String, required: true },
  subcategory_id: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true }
})

module.exports = model('Product', Product)