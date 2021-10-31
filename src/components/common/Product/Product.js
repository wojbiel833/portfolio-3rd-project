import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Button } from '../Button/Button';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './Product.module.scss';

const Component = ({
  className,
  children,
  products,
  title,
  description,
  photo,
  price,
}) => {
  return (
    <div className={clsx(className, styles.root)}>
      {products.map(product => (
        <div
          className={clsx(styles.product1, styles[`${product.classType}`])}
          key={product.id}
        >
          <div className="container">
            <div className="row">
              <div className={clsx(className, styles.productPhoto)}>
                <img
                  className={clsx(className, styles.photo)}
                  src={product.photo1}
                  alt={product.photo1}
                />
              </div>
              <div className={clsx(className, styles.productDescription)}>
                <h2 className={clsx(className, styles.title)}>
                  {product.title}
                </h2>
                <p className={clsx(className, styles.description)}>
                  {product.description}
                </p>
                <p className={clsx(className, styles.price)}>
                  {product.price.priceMin}
                </p>

                <Button
                  className={clsx(className, styles.button)}
                  name={`Dowiedz się więcej`}
                  to={`/products/${product.id}`}
                  icon={faFeatherAlt}
                ></Button>
              </div>
            </div>
          </div>
          {/* {children} */}
        </div>
      ))}
      {/* <div
        className={clsx(styles.product1, styles[`${products[1].classType}`])}
      >
        <div className="container">
          <div className="row">
            <div className={clsx(className, styles.productPhoto)}>
              <img
                className={clsx(className, styles.photo)}
                src={products[1].photo}
                alt={products[1].photo}
              />
            </div>
            <div className={clsx(className, styles.productDescription)}>
              <h2 className={clsx(className, styles.title)}>
                {products[1].title}
              </h2>
              <p className={clsx(className, styles.description)}>
                {products[1].description}
              </p>
              <p className={clsx(className, styles.price)}>
                {products[1].price}
              </p>

              <Button
                className={clsx(className, styles.button)}
                name={`Zapisz się teraz`}
                to=""
                icon={faFeatherAlt}
              ></Button>
            </div>
          </div>
        </div>
      </div> */}
      {/* {children} */}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.string,
};

const mapStateToProps = state => ({
  products: state.products.data,
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
