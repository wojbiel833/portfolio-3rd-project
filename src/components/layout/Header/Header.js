import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';
import { StyledButton } from '../../common/StyledButton/StyledButton';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <h1 className={clsx(className, styles.text)}>
      <p>Witaj w naszym Studio!</p>
      <span>
        Dołącz do naszej szkoły i naucz się jogicznego tańca świadomości razem z
        nami!
      </span>
    </h1>
    <img
      className={clsx(className, styles.image)}
      src="https://i.ibb.co/RcmRjxv/pexels-alexy-almond-3758056-1.jpg"
      alt="pexels-alexy-almond-3758056-1"
      border="0"
    />
    <StyledButton />
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
