const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  price: { type: Object, required: true },
  classType: { type: String, required: true },
  photo1: { type: String, required: true },
  photo2: { type: String },
  photo3: { type: String },
});

module.exports = mongoose.model('Product', productSchema);
