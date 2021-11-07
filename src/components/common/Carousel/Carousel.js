import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from './Carousel.module.scss';

const Component = ({ className, children, photo1, photo2, photo3 }) => (
  <div className={clsx(className, styles.root)}>
    <Carousel>
      <div>
        <img src={photo1} alt={photo1} />
      </div>
      <div>
        <img src={photo2} alt={photo2} />
      </div>
      <div>
        <img src={photo3} alt={photo3} />
      </div>
    </Carousel>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  photo1: PropTypes.string,
  photo2: PropTypes.string,
  photo3: PropTypes.string,
};

export { Component as Carousel, Component as CarouselComponent };
