import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Button } from '../../common/Button/Button';

import { connect } from 'react-redux';
import { fetchCartProducts } from '../../../redux/cartRedux';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// import TextField from '@mui/material/TextField';

import styles from './Cart.module.scss';
import { Form } from '../../features/Form/Form';

class Component extends React.Component {
  componentDidMount() {
    const { fetchCart } = this.props;
    fetchCart();
  }

  render() {
    const {
      className,
      children,
      cart,
      id,
      title,
      price,
      amount,
      additionalComment,
    } = this.props;

    const countSummaryPrice = cart => {
      console.log(cart);
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
      // console.log(totalPrice);
      return totalPrice;
    };

    return (
      <div className={clsx(className, styles.root)}>
        <h2 className={clsx(className, styles.title)}>Twój koszyk</h2>
        <div className={clsx(className, styles.cart)}>
          {cart.map(product => (
            <div className={clsx(className, styles.product)} key={product.id}>
              <span className={clsx(className, styles.info)}>
                <p className={clsx(className, styles.productName)}>
                  {product.title} - {product.priceDescription}
                </p>
                <p className={clsx(className, styles.price)}>
                  {product.price} zł
                </p>
              </span>
              <span className={clsx(className, styles.edit)}>
                <input
                  className={clsx(className, styles.amount)}
                  // onChange={}
                  value={product.amount}
                  step="1"
                  min="1"
                  max="9"
                  type="number"
                  // id={`amount${priceVariant.price}`}
                  // name={`amount${priceVariant.price}`}
                />
                <input
                  className={clsx(className, styles.comment)}
                  placeholder="Dodatkowy komentarz"
                  // onChange={}
                  value={product.additionalComment}
                  type="text"
                  // id={`amount${priceVariant.price}`}
                  // name={`amount${priceVariant.price}`}
                />
                <Button
                  className={clsx(className, styles.button)}
                  icon={faSave}
                  // name="zapisz"
                  to=""
                />
                <Button
                  className={clsx(className, styles.button)}
                  icon={faTrashAlt}
                  // name="usuń"
                  to=""
                />
              </span>
            </div>
          ))}
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
        <Form />
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
};

const mapStateToProps = state => ({
  cart: state.cart.data,
});

const mapDispatchToProps = dispatch => ({
  fetchCart: () => dispatch(fetchCartProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
