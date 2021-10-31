const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  houseNr: { type: String, required: true },
  flatNr: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
