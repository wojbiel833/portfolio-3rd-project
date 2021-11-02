const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: { type: String, required: true },
  orderedProducts: { type: Array, required: true },
  contactData: {
    name: '',
    email: { type: String, required: true },
    phone: { type: String },
    city: { type: String, required: true },
    street: { type: String, required: true },
    house: { type: String, required: true },
    flat: { type: String, required: true },
    content: { type: String },
  },
});

module.exports = mongoose.model('Order', orderSchema);
