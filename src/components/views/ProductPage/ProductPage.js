import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Button } from '../../common/Button/Button';

import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { getProducts, fetchProducts } from '../../../redux/productsRedux';
import { addProductToCartRequest } from '../../../redux/cartRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductPage.module.scss';
import { Carousel } from '../../common/Carousel/Carousel';

class Component extends React.Component {
  state = {
    variant: '',
    price: 0,
    amount: 0,
    products: {},
    error: null,
  };

  componentDidMount() {
    const { fetchAllProducts } = this.props;
    fetchAllProducts();
  }

  submitCartProduct = e => {
    e.preventDefault();
    console.log(e);
    try {
      // console.log(this.state);
      const { price, amount, variant } = this.state;
      const { products } = this.props;
      const product = products[0];
      // console.log(typeof product, product);
      const id = product.id;
      const title = product.title;

      const additionalComment = '';
      const contactData = {};

      let error = null;

      if (amount === 0) {
        // console.log(amount);
        error = 'Musisz wybrać chociaż jeden produkt';
      }

      if (error === null) {
        let formData = {
          id: id,
          title: title,
          price: price,
          amount: amount,
          priceDescription: variant,
          additionalComment: additionalComment,
          contactData: contactData,
        };

        // console.log(formData);

        this.setState({ error: null });
        console.log('udało się', formData);
        this.props.addProduct(formData);
      } else {
        this.setState({ error });

        console.log('nie udało się', error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    // console.log(this.props);
    const {
      // id,
      className,
      // children,
      // products,
      // id,
      title,
      // description,
      longDescription,
      photo1,
      photo2,
      photo3,
      price,
    } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        {/* <div key={id}> */}
        <h2 className={clsx(className, styles.title)}>{title}</h2>
        <div className="container">
          <div className={clsx(styles.product)}>
            <div className="row">
              <div className={clsx(className, styles.productPhotos)}>
                <Carousel photo1={photo1} photo2={photo2} photo3={photo3} />
              </div>
              <div className={clsx(className, styles.productDescription)}>
                <div className={clsx(className, styles.description)}>
                  <h3 className={clsx(className, styles.subtitle)}>
                    Opis produktu
                  </h3>
                  <p>{longDescription}</p>
                </div>
                <div className={clsx(className, styles.prices)}>
                  <h3 className={clsx(className, styles.subtitle)}>
                    Cena i jej warianty
                  </h3>
                  <ul className={clsx(className, styles.priceVariants)}>
                    {price.priceVariants.map(priceVariant => (
                      <li
                        key={priceVariant.price}
                        className={clsx(className, styles.priceVariant)}
                      >
                        <label
                          className={clsx(className, styles.priceDetail)}
                          forhtml={`amount${priceVariant.price}`}
                        >
                          {priceVariant.variant}
                        </label>
                        <input
                          className={clsx(className, styles.amount)}
                          step="1"
                          min="1"
                          max="9"
                          type="number"
                          id={`amount${priceVariant.price}`}
                          name={`amount${priceVariant.price}`}
                          value={this.state.products.amount}
                          onChange={e => {
                            this.setState({
                              ...this.state,
                              variant: priceVariant.variant,
                              price: priceVariant.price,
                              amount: e.target.value,
                            });
                          }}
                        />

                        <Button
                          className={clsx(className, styles.button)}
                          icon={faCartPlus}
                          type="submit"
                          name=""
                          to=""
                          onClick={this.submitCartProduct}
                        />
                      </li>
                    ))}
                  </ul>
                  <p className={clsx(className, styles.exception)}>
                    Przy zakupie 10 i wiekszej ilośćci danego produktu prosimy o
                    kontakt telefoniczny!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* {children} */}
        </div>
      </div>
      // </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  products: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  longDescription: PropTypes.string,
  photo1: PropTypes.string,
  photo2: PropTypes.string,
  photo3: PropTypes.string,
  price: PropTypes.object,
  addProduct: PropTypes.func,
  fetchAllProducts: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  let productParams = {};
  let id;
  // console.log(state);
  // console.log(props.match.params.id);
  if (props.match.params.id) {
    id = props.match.params.id;

    const filteredProducts = state.products.data.filter(
      product => product.id === id
    );
    // console.log(filteredProducts);
    productParams = filteredProducts[0] || {};
  }

  return {
    ...productParams,
    // products: state.products.data,
    products: getProducts(state, id),
  };
};

const mapDispatchToProps = dispatch => ({
  addProduct: data => dispatch(addProductToCartRequest(data)),
  fetchAllProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductPage,
  Container as ProductPage,
  Component as ProductPageComponent,
};
