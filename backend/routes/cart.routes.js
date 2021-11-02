const express = require('express');
const router = express.Router();

const shortid = require('shortid');

const CartProducts = require('../models/cart.model');

router.get('/cart', async (req, res) => {
  try {
    const result = await CartProducts.find();
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
  console.log('REQ', req.body);
  // console.log('RES', res);
  // console.log(res);
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

    // console.log(
    //   title,
    //   price,
    //   priceDescription,
    //   amount,
    //   additionalComment,
    //   contactData
    // );

    let error = null;

    if (amount === 0) {
      // console.log(amount);
      error = 'Musisz wybrać chociaż jeden produkt';
    }

    if (!error) {
      const newCart = new CartProducts({
        id: id,
        title: title,
        price: price,
        priceDescription: priceDescription,
        amount: amount,
        additionalComment: additionalComment,
        contactData: contactData,
      });

      await newCart.save();
      res.json({ message: 'OK', cartProduct: newCart });
    } else res.json({ message: error });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put('/cart', async (req, res) => {
  const {
    id,
    _id,
    title,
    price,
    priceDescription,
    amount,
    additionalComment,
    contactData,
  } = req.body;

  try {
    console.log('aaa', req.body);
    const cartProduct = await CartProducts.findById(_id);
    console.log(cartProduct);

    let error = null;

    if (amount === 0) {
      // console.log(amount);
      error = 'Musisz wybrać chociaż jeden produkt';
    }

    console.log('cartProduct', cartProduct.contactData);

    if (!error) {
      if (cartProduct) {
        await CartProducts.updateOne(
          { _id: _id },
          {
            $set: {
              id: id,
              title: title,
              price: price,
              amount: amount,
              priceDescription: priceDescription,
              additionalComment: additionalComment,
              contactData: contactData,
            },
          }
        );
        console.log(`Post ${cartProduct} has been changed!`);
        res.json(cartProduct);
      } else res.status(404).json({ message: 'Not found...' });
    } else res.status(404).json({ message: error });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

router.delete('/cart', async (req, res) => {
  try {
    console.log(req.body);
    const _id = req.body._id;
    console.log(_id);
    // console.log('req.body', req.body);
    // const id = req.body._id;
    // console.log(id);
    const deletedProduct = await CartProducts.deleteOne({ _id: _id });
    // console.log('deletedProduct:', deletedProduct);
    // if (deletedProduct) {
    // CartdeletedProducts.splice(deletedProduct, 1);
    // res.json({ message: 'OK' });
    // }
    res.json({ message: `${deletedProduct} deleted!` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = router;
