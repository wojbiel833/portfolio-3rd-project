import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Button } from '../Button/Button';

import { connect } from 'react-redux';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './Product.module.scss';

const Component = ({ className, children, products }) => {
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
        </div>
      ))}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: state.products.data,
});

const Container = connect(mapStateToProps, null)(Component);

export { Container as Product, Component as ProductComponent };
