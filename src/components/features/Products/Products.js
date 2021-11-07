import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Product } from '../../common/Product/Product';

import styles from './Products.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={clsx(className, styles.productsTitle)}>
      Poznaj nasze produkty
    </h2>
    <div className={clsx(className, styles.products)}>
      <Product className="Product" />
    </div>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Products, Component as ProductsComponent };
