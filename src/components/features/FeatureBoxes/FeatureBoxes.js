import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { FeatureBox } from '../../common/FeatureBox/FeatureBox';

import {
  faBullhorn,
  faSchool,
  faHeart,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './FeatureBoxes.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className="container">
      <div className="row">
        <div className="col-6 col-lg-3">
          <FeatureBox icon={faBullhorn} active>
            <h5>Mentoring</h5>
            <p>Dla chetnych</p>
          </FeatureBox>
        </div>
        <div className="col-6 col-lg-3">
          <FeatureBox icon={faHeart}>
            <h5>Różnorodne zajęcia</h5>
            <p>prowadzone przez doświadczonych nauczycieli</p>
          </FeatureBox>
        </div>
        <div className="col-6 col-lg-3">
          <FeatureBox icon={faCreditCard}>
            <h5>Karnety</h5>
            <p>możliwość zakupu</p>
          </FeatureBox>
        </div>
        <div className="col-6 col-lg-3">
          <FeatureBox icon={faSchool}>
            <h5>Pierwsza lekcja</h5>
            <p>GRATIS!</p>
          </FeatureBox>
        </div>
      </div>
    </div>
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
  Component as FeatureBoxes,
  // Container as FeatureBoxes,
  Component as FeatureBoxesComponent,
};
