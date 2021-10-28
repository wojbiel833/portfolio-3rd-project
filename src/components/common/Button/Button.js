import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import styles from './Button.module.scss';

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#74b674',
  padding: '10px 15px',
  fontSize: '20px',
  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: '#3d7c3d',
  },
}));

const Component = ({
  className,
  children,
  name,
  baseClassName,
  icon,
  onClick,
  to,
}) => (
  <div className={clsx(className, styles.root)}>
    <StyledButton component={Link} onClick={onClick} to={to}>
      <Icon className={styles.icon} icon={icon} />
      <p>{name}</p>
    </StyledButton>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  baseClassName: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export { Component as Button, Component as ButtonComponent };
