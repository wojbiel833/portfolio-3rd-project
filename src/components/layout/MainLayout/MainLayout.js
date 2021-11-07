import React from 'react';
import PropTypes from 'prop-types';

import { NavBar } from '../NavBar/NavBar';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchProducts } from '../../../redux/productsRedux';
import { fetchCartProducts } from '../../../redux/cartRedux';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { Container } from '@mui/material';

import styles from './MainLayout.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchAllProducts, fetchCart } = this.props;
    fetchAllProducts();
    fetchCart();
  }

  render() {
    const { className, children } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <NavBar className="NavBar" />
        <Header className="Header" />
        <Container>{children}</Container>
        <Footer />
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fetchAllProducts: PropTypes.func,
  fetchCart: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchProducts()),
  fetchCart: () => dispatch(fetchCartProducts()),
});

const MainLayoutContainer = connect(null, mapDispatchToProps)(Component);

export { MainLayoutContainer as MainLayout, Component as MainLayoutComponent };
