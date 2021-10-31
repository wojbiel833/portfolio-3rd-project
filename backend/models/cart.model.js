const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  priceDescription: { type: String, required: true },
  amount: { type: Number, required: true },
  additionalComment: { type: String },
  contactData: { type: Object, required: true },
});

module.exports = mongoose.model('Cart', cartSchema);
