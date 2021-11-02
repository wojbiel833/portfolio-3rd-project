import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Button } from '../../common/Button/Button';

import { connect } from 'react-redux';
import {
  fetchCartProducts,
  updateProductInCart,
  deleteProductFromCart,
} from '../../../redux/cartRedux';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// import TextField from '@mui/material/TextField';

import styles from './Cart.module.scss';
import { Form } from '../../features/Form/Form';

class Component extends React.Component {
  state = {
    additionalComment: '',
    id: '',
    _id: '',
    priceDescription: '',
    price: 0,
    totalPrice: 0,
    amount: 0,
    products: {},
    error: null,
  };

  componentDidMount() {
    const { fetchCart } = this.props;
    fetchCart();
  }

  updateCartProduct = e => {
    e.preventDefault();

    try {
      const {
        id,
        _id,
        price,
        priceDescription,
        amount,
        additionalComment,
        title,
      } = this.state;
      const { cart } = this.props;
      console.log(id);
      const contactData = {
        name: '',
        email: '',
        phone: '',
        city: '',
        street: '',
        house: '',
        flat: '',
        content: '',
      };

      let error = null;

      if (amount === 0) {
        // console.log(amount);
        error = 'Musisz wybrać chociaż jeden produkt';
      }

      if (error === null) {
        let formData = {
          id: id,
          _id: _id,
          title: title,
          price: price,
          amount: amount,
          priceDescription: priceDescription,
          additionalComment: additionalComment,
          contactData: contactData,
        };

        // console.log(formData);

        this.setState({ error: null });
        this.forceUpdate();
        // console.log('udało się', formData);
        this.props.updateProduct(formData);
      } else {
        this.setState({ error });

        console.log('nie udało się', error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  deleteCartProduct = e => {
    e.preventDefault();

    const product =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(product);
    const productId = product.getAttribute('id');
    console.log('productId', productId);

    const { cart } = this.props;
    // console.log(cart);
    const filteredCart = cart.filter(el => el.id === productId);
    // console.(filteredCart);
    const cartProduct = filteredCart[0];
    console.log(cartProduct);

    try {
      this.props.deleteProduct(cartProduct);
      this.forceUpdate();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { className, cart } = this.props;

    const countSummaryPrice = cart => {
      // console.log(cart);
      let prices = [];
      let amounts = [];

      cart.filter(p => {
        prices.push(p.price);
        amounts.push(p.amount);
      });
      // console.log(prices);
      // console.log(amounts);

      let productPrice = 0;
      let totalPrice = 0;
      for (let i = 0; i <= prices.length - 1; i++) {
        productPrice = prices[i] * amounts[i];

        totalPrice += productPrice;
      }
      // this.setState({ totalPrice: totalPrice });
      // console.log(totalPrice);
      return totalPrice;
    };

    return (
      <div className={clsx(className, styles.root)}>
        <h2 className={clsx(className, styles.title)}>Twój koszyk</h2>
        <div className={clsx(className, styles.cart)}>
          {cart[0] ? (
            cart.map(product => {
              console.log(product);
              return (
                <div
                  className={clsx(className, styles.product)}
                  key={product.id}
                  id={product.id}
                >
                  <span className={clsx(className, styles.info)}>
                    <span className={clsx(className, styles.productName)}>
                      <p className={clsx(className, styles.name)}>
                        &quot;{product.title}&quot;
                      </p>
                      <p className={clsx(className, styles.description)}>
                        {product.priceDescription}
                      </p>
                    </span>
                    <p className={clsx(className, styles.price)}>
                      {product.price} zł
                    </p>
                  </span>
                  <span className={clsx(className, styles.edit)}>
                    <input
                      className={clsx(className, styles.amount)}
                      // onChange={}
                      placeholder={product.amount}
                      step="1"
                      min="1"
                      max="9"
                      type="number"
                      // id={`amount${priceVariant.price}`}
                      // name={`amount${priceVariant.price}`}
                      value={'' ? product.amount : this.state.products.amount}
                      // value={ this.state.products.amount}
                      onChange={e => {
                        this.setState({
                          ...this.state,
                          amount: e.target.value,
                          id: product.id,
                          _id: product._id,
                          title: product.title,
                          price: product.price,
                          priceDescription: product.priceDescription,
                        });
                      }}
                    />
                    <input
                      className={clsx(className, styles.comment)}
                      placeholder={product.additionalComment}
                      // onChange={}
                      // value={
                      //   ''
                      //     ? product.additionalComment
                      //     : this.state.additionalComment
                      // }
                      type="text"
                      onChange={e => {
                        this.setState({
                          ...this.state,
                          additionalComment: e.target.value,
                        });
                      }}
                      id={`additionalComment${product.price}`}
                      name={`additionalComment${product.price}`}
                    />
                    <Button
                      className={clsx(className, styles.button)}
                      icon={faSave}
                      onClick={this.updateCartProduct}
                      to=""
                    />
                    <Button
                      className={clsx(className, styles.button)}
                      icon={faTrashAlt}
                      onClick={this.deleteCartProduct}
                      to=""
                    />
                  </span>
                </div>
              );
            })
          ) : (
            <div className={clsx(className, styles.product)}>
              {/* <span className={clsx(className, styles.info)}> */}
              <p className={clsx(className, styles.emptyCart)}>
                Twój koszyk jest pusty
              </p>
              {/* </span> */}
            </div>
          )}

          <div className={clsx(className, styles.summary)}>
            <p className={clsx(className, styles.summaryName)}>
              Cena całkowita:
            </p>
            <p className={clsx(className, styles.totalPrice)}>
              {countSummaryPrice(cart)} zł
            </p>
          </div>
        </div>

        {/* {children} */}
        <Form cart={cart} />
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.array,
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  additionalComment: PropTypes.string,
  fetchCart: PropTypes.func,
  updateProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart.data,
});

const mapDispatchToProps = dispatch => ({
  fetchCart: () => dispatch(fetchCartProducts()),
  updateProduct: data => dispatch(updateProductInCart(data)),
  deleteProduct: data => dispatch(deleteProductFromCart(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
