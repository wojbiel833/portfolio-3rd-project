import React from 'react';
import PropTypes from 'prop-types';

import { NavBar } from '../NavBar/NavBar';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Homepage } from '../../views/Homepage/Homepage';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { Container } from '@mui/material';

import styles from './MainLayout.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <NavBar className="NavBar" />
    <Header className="Header" />
    <Container>
      {/* <Homepage /> */}
      {children}
    </Container>
    <Footer />
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
