const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model');

router.get('/cart', async (req, res) => {
  try {
    // console.log(req);
    // console.log(res);
    // console.log(Cart);
    const result = await Cart.find();
    // console.log('result', result);
    // .select('author created title photo')
    // .sort({created: -1});
    if (!result) res.status(404).json({ cart: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
