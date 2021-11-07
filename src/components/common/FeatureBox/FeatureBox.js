import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

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

export { Component as FeatureBox, Component as FeatureBoxComponent };
