import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

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
    <StyledButton href="/products" />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Header, Component as HeaderComponent };
