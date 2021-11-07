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

import styles from './FeatureBoxes.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className="container">
      <div className="row">
        <div className="col-6 col-lg-3">
          <FeatureBox icon={faBullhorn} active>
            <h5>Mentoring</h5>
            <p className="paragraph">
              Dla chetnych, którzy są już doświadczeni
            </p>
          </FeatureBox>
        </div>
        <div className="col-6 col-lg-3">
          <FeatureBox icon={faHeart}>
            <h5>Różnorodne zajęcia</h5>
            <p className="paragraph">z doświadczonymi nauczycieliami</p>
          </FeatureBox>
        </div>
        <div className="col-6 col-lg-3">
          <FeatureBox icon={faCreditCard}>
            <h5>Karnety</h5>
            <p className="paragraph">możliwość zakupu na różne okresy czasu</p>
          </FeatureBox>
        </div>
        <div className="col-6 col-lg-3">
          <FeatureBox icon={faSchool}>
            <h5>Pierwsza lekcja</h5>
            <p className="paragraph">
              GRATIS! <br />
              Zapisz sie teraz!
            </p>
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

export { Component as FeatureBoxes, Component as FeatureBoxesComponent };
