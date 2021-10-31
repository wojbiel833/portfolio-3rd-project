import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './StyledButton.module.scss';

const Component = ({ className, children, href }) => (
  <div className={clsx(className, styles.headerBtn)}>
    <a className={clsx(className, styles.btn)} href={href}>
      Nasze produkty
    </a>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as StyledButton,
  // Container as StyledButton,
  Component as StyledButtonComponent,
};
