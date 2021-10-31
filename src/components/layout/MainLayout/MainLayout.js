import React from 'react';
import PropTypes from 'prop-types';

import { NavBar } from '../NavBar/NavBar';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Homepage } from '../../views/Homepage/Homepage';

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
        <Container>
          {/* <Homepage /> */}
          {children}
        </Container>
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

const mapStateToProps = state => ({
  // someProp: reduxSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchProducts()),
  fetchCart: () => dispatch(fetchCartProducts()),
});

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  // Component as MainLayout,
  MainLayoutContainer as MainLayout,
  Component as MainLayoutComponent,
};
