import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

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

export { Component as StyledButton, Component as StyledButtonComponent };
