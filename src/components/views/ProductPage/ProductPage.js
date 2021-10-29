import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Button } from '../../common/Button/Button';

import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductPage.module.scss';
import { Carousel } from '../../common/Carousel/Carousel';

class Component extends React.Component {
  render() {
    console.log(this.props);
    const {
      // id,
      className,
      children,
      // products,
      id,
      title,
      description,
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
                        <p className={clsx(className, styles.priceDetail)}>
                          {priceVariant.variant}
                        </p>
                        <input
                          className={clsx(className, styles.amount)}
                          // onChange={}
                          // value="1"
                          step="1"
                          min="1"
                          max="9"
                          type="number"
                          id={`amount${priceVariant.price}`}
                          name={`amount${priceVariant.price}`}
                        />

                        <Button
                          className={clsx(className, styles.button)}
                          icon={faCartPlus}
                          name=""
                          to=""
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
};

const mapStateToProps = (state, props) => {
  let postParams = {};
  let id;

  if (props.match) {
    id = props.match.params.id;
    const filteredProducts = state.products.data.filter(
      product => product.id === id
    );
    postParams = filteredProducts[0] || {};
  }

  return {
    ...postParams,
    // products: state.products.data,
    products: getProducts(state, id),
  };
};

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductPage,
  Container as ProductPage,
  Component as ProductPageComponent,
};
