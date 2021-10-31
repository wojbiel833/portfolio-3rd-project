const express = require('express');
const router = express.Router();

const shortid = require('shortid');

const Cart = require('../models/cart.model');

router.get('/cart', async (req, res) => {
  try {
    const result = await Cart.find();
    // .select('author created title photo')
    // .sort({created: -1});
    // console.log('result', result);
    if (!result) res.status(404).json({ cart: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/cart', async (req, res) => {
  try {
    const id = shortid.generate();
    const {
      title,
      price,
      priceDescription,
      amount,
      additionalComment,
      contactData,
    } = req.body;

    // let error;
    // if (!name || !content || !email || !localization)
    //   error = 'Musisz wypełnić wymagane pola oznaczone gwiazdką';

    // if (name.length <= 10) error = 'Tytuł jest za krótki (min. 10 znaków)';
    // if (content.length <= 20) error = 'Tytuł jest za krótki (min. 20 znaków)';
    // if (!email.includes('@')) error = 'Zły format adresu e-mail';
    // if (localization.length <= 3)
    //   error = 'Nazwa lokaliozacji jest za krótka (min. 3 znaki)';

    // if (!error) {
    const newCart = new Cart({
      id: id,
      title: title,
      price: price,
      priceDescription: priceDescription,
      amount: amount,
      additionalComment: additionalComment,
      contactData: contactData,
    });

    //   await newPost.save();
    res.json({ message: 'OK', cartProduct: newCart });
    // } else
    //  res.json({ message: error });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
