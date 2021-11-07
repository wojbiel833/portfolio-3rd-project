import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FeatureBoxes } from '../../features/FeatureBoxes/FeatureBoxes';
import { Products } from '../../features/Products/Products';

import styles from './Homepage.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <FeatureBoxes className="FeatureBoxes" />
    <Products className="Products" />
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Homepage, Component as HomepageComponent };
