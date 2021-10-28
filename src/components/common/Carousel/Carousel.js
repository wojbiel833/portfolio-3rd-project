import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from './Carousel.module.scss';

const Component = ({ className, children, photo1, photo2, photo3 }) => (
  <div className={clsx(className, styles.root)}>
    <Carousel>
      <div>
        <img src={photo1} alt={photo1} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={photo2} alt={photo2} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={photo3} alt={photo3} />
        {/* <p className="legend">Legend 3</p> */}
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

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Carousel,
  // Container as Carousel,
  Component as CarouselComponent,
};
