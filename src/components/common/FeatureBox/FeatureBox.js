import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';

const Component = ({ className, children, icon }) => (
  <div className={clsx(className, styles.root)}>
    {icon && (
      <a href="#" className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </a>
    )}
    <div className={styles.content}>{children}</div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as FeatureBox,
  // Container as FeatureBox,
  Component as FeatureBoxComponent,
};
