import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import styles from './NotFound.module.scss';

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  fontSize: '20px',
  margin: '20px 0',
  width: '100%',
  height: '30px',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Component = ({ className = 'NotFound', children }) => (
  <div className={clsx(className, styles.root)}>
    <img
      src="https://i.ibb.co/YjLkM02/image1-1024x542.jpg"
      alt="image1-1024x542"
      border="0"
    />
    <StyledLink className={clsx(className, styles.link)} href="/">
      Wróć do strony głównej
    </StyledLink>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as NotFound, Component as NotFoundComponent };
