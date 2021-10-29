import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Button } from '../../common/Button/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import TextField from '@mui/material/TextField';

import styles from './Cart.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={clsx(className, styles.title)}>Twój koszyk</h2>
    <div className={clsx(className, styles.yourCart)}></div>
    <form
      className={clsx(className, styles.root)}
      id="formElem"
      // onSubmit={submitForm}
    >
      <div className={clsx(className, styles.content)}>
        <div className={clsx(className, styles.head)}>
          <h2 className={clsx(className, styles.title)}>Dane do wysyłki</h2>
          <Button
            className="Button"
            name="Dodaj ogłoszenie"
            // icon={faPlusCircle}
            type="submit"
            to=""
            // onClick={submitForm}
          />
        </div>
        <div className={clsx(className, styles.inputs)}>
          <TextField
            className={clsx(className, styles.input)}
            id="filled-error-helper-text"
            label="Tytuł ogłoszenia*"
            placeholder="Tytuł ogłoszenia"
            variant="filled"
            fullWidth={true}
            minLength={10}
            name="name"
            type="name"
            // value={this.state.post.name}
            // onChange={e => this.setPostParam('name', e.target.value)}
          />

          <TextField
            className={clsx(className, styles.input)}
            id="outlined-multiline-static"
            label="Treść ogłoszenia*"
            multiline
            rows={8}
            placeholder="Kupie/Sprzedam/Zamienię/Wynajmę..."
            fullWidth={true}
            minLength={20}
            name="content"
            type="content"
            // value={this.state.post.content}
            // onChange={e => this.setPostParam('content', e.target.value)}
          />
        </div>
      </div>
      <div className={clsx(className, styles.contact)}>
        <div>
          <TextField
            className={clsx(className, styles.input)}
            id="outlined-multiline-static"
            label="E-mail*"
            rows={1}
            placeholder="example@gmail.com"
            name="email"
            type="email"
            // value={this.state.post.email}
            // onChange={e => this.setPostParam('email', e.target.value)}
          />
        </div>
        <div>
          <TextField
            className={clsx(className, styles.input)}
            id="outlined-multiline-static"
            label="Telefon"
            rows={1}
            placeholder="0 700 880 774"
            name="phone"
            type="phone"
            // value={this.state.post.phone}
            // onChange={e => this.setPostParam('phone', e.target.value)}
          />
        </div>
        <div>
          <TextField
            className={clsx(className, styles.input)}
            id="outlined-multiline-static"
            label="Lokalizacja*"
            rows={1}
            placeholder="Warszawa"
            name="localization"
            type="localization"
            // value={this.state.post.localization}
            // onChange={e => this.setPostParam('localization', e.target.value)}
          />
        </div>
      </div>
      <div className={clsx(className, styles.dates)}>
        <div>
          <h4>Data publikacji:</h4>
          {/* <p>{formatDate(new Date())}</p> */}
        </div>
        <div>
          <h4>Status ogłoszenia:</h4>
          <p>Szkic</p>
        </div>
        <div>
          <h4>Data ostatniej aktualizacji:</h4>
          <p>
            {/* {actualisationDate === publicationDate
              ? formatDate(new Date())
              : actualisationDate} */}
          </p>
        </div>
      </div>
      <p className={clsx(className, styles.arsrterisk)}>
        * Pola oznaczone gwiazdką są wymagane!
      </p>
    </form>
    {/* {children} */}
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
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
