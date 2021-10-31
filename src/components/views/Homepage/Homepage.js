import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { FeatureBoxes } from '../../features/FeatureBoxes/FeatureBoxes';
import { Products } from '../../features/Products/Products';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

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

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
