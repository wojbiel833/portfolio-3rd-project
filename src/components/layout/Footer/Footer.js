import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={clsx(className, styles.text)}>
      <h3>Created by: Wojcieh Bielecki</h3>
      <p>All rights reserved</p>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Footer, Component as FooterComponent };
