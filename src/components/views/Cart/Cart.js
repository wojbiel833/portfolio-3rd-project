import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Button } from '../../common/Button/Button';
import { Form } from '../../features/Form/Form';

import { connect } from 'react-redux';
import {
  fetchCartProducts,
  updateProductInCart,
  deleteProductFromCart,
} from '../../../redux/cartRedux';

import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Cart.module.scss';

class Component extends React.Component {
  state = {
    cart: [],
    error: null,
  };

  componentDidMount() {
    const { fetchCart } = this.props;
    fetchCart();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart !== prevProps.cart) {
      this.setState({ ...this.state, cart: this.props.cart });
    }
  }

  handleChange(index, field, value) {
    const cartCopy = [...this.state.cart];

    cartCopy[index][field] = value;

    this.setState({ ...this.state, cart: cartCopy });
  }

  updateCartProduct(productId) {
    try {
      const product = this.state.cart.find(el => el.id === productId);
      const {
        id,
        _id,
        price,
        priceDescription,
        amount,
        additionalComment,
        title,
      } = product;

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

        this.setState({ error: null });

        this.props.updateProduct(formData);
      } else {
        this.setState({ error });
      }
    } catch (err) {
      console.log(err);
    }
  }

  deleteCartProduct(productId) {
    const { cart } = this.props;
    const filteredCart = cart.filter(el => el.id === productId);
    const cartProduct = filteredCart[0];
    console.log(cartProduct);

    try {
      this.props.deleteProduct(cartProduct);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { cart } = this.state;
    const { className } = this.props;
    const countSummaryPrice = cart => {
      let prices = [];
      let amounts = [];

      cart.filter(p => {
        prices.push(p.price);
        amounts.push(p.amount);
      });

      let productPrice = 0;
      let totalPrice = 0;
      for (let i = 0; i <= prices.length - 1; i++) {
        productPrice = prices[i] * amounts[i];

        totalPrice += productPrice;
      }

      return totalPrice;
    };

    return (
      <div className={clsx(className, styles.root)}>
        <h2 className={clsx(className, styles.title)}>Twój koszyk</h2>
        <div className={clsx(className, styles.cart)}>
          {cart[0] ? (
            cart.map((product, index) => {
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
                      placeholder={product.amount}
                      step="1"
                      min="1"
                      max="9"
                      type="number"
                      value={product.amount}
                      onChange={e =>
                        this.handleChange(index, 'amount', e.target.value)
                      }
                    />
                    <input
                      className={clsx(className, styles.comment)}
                      placeholder={product.additionalComment}
                      value={product.additionalComment}
                      type="text"
                      onChange={e =>
                        this.handleChange(
                          index,
                          'additionalComment',
                          e.target.value
                        )
                      }
                      id={`additionalComment${product.price}`}
                      name={`additionalComment${product.price}`}
                    />
                    <Button
                      className={clsx(className, styles.button)}
                      icon={faSave}
                      onClick={e => {
                        e.preventDefault();
                        this.updateCartProduct(product.id);
                      }}
                      to=""
                    />
                    <Button
                      className={clsx(className, styles.button)}
                      icon={faTrashAlt}
                      onClick={e => {
                        e.preventDefault();
                        this.deleteCartProduct(product.id);
                      }}
                      to=""
                    />
                  </span>
                </div>
              );
            })
          ) : (
            <div className={clsx(className, styles.product)}>
              <p className={clsx(className, styles.emptyCart)}>
                Twój koszyk jest pusty
              </p>
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

export { Container as Cart, Component as CartComponent };
