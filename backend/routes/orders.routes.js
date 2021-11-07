const express = require('express');
const router = express.Router();

const shortid = require('shortid');

const Order = require('../models/order.model');

router.get('/orders', async (req, res) => {
  try {
    const result = await Order.find();
    if (!result) res.status(404).json({ cart: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/orders', async (req, res) => {
  try {
    const orderID = shortid.generate();

    const {
      orderedProducts,
      name,
      email,
      phone,
      city,
      street,
      house,
      flat,
      content,
    } = req.body;

    let error = null;
    if (!name || !email || !city || !street || !house || !flat)
      error = 'Musisz wypełnić wymagane pola oznaczone gwiazdką';
    if (!email.includes('@')) error = 'Zły format adresu e-mail';

    if (!error) {
      const newOrder = new Order({
        orderID: orderID,
        orderedProducts: orderedProducts,
        contactData: {
          name: name,
          email: email,
          phone: phone,
          city: city,
          street: street,
          house: house,
          flat: flat,
          content: content,
        },
      });

      await newOrder.save();
      res.json({ message: 'OK', order: newOrder });
    } else res.status(404).json({ message: error });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
