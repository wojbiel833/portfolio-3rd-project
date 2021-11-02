const express = require('express');
const router = express.Router();

const shortid = require('shortid');

const Order = require('../models/order.model');

router.get('/orders', async (req, res) => {
  try {
    const result = await Order.find();
    // .select('author created title photo')
    // .sort({created: -1});
    // console.log('result', result);
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
    console.log('/orders -  req.body', req.body);
    // console.log(
    //   '/cart/orders - contactData',
    //   name,
    //   email,
    //   phone,
    //   city,
    //   street,
    //   house,
    //   flat,
    //   content
    // );

    // console.log(cartProduct);

    let error = null;

    // if (amount === 0) {
    //   // console.log(amount);
    //   error = 'Musisz wybrać chociaż jeden produkt';
    // }

    // console.log('cartProduct', cartProduct.contactData);

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
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = router;
