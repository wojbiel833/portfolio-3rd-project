const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  priceDescription: { type: String, required: true },
  amount: { type: Number, required: true },
  additionalComment: { type: String },
});

module.exports = mongoose.model('Cart', cartSchema);
