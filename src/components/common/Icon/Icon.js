import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Icon.module.scss';

const Component = ({ className, children, icon }) => (
  <FontAwesomeIcon className={styles.icon} icon={icon} />
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.object,
};

export { Component as Icon, Component as IconComponent };
