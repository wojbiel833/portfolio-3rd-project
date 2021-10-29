import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Button } from '../../common/Button/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import TextField from '@mui/material/TextField';

import styles from './Form.module.scss';

const Component = ({ className, children }) => (
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
          name="Wyślij zgłoszenie i zapłać"
          icon={faPaperPlane}
          type="submit"
          to=""
          // onClick={submitForm}
        />
      </div>
      <div className={clsx(className, styles.inputs)}>
        <div className={clsx(className, styles.group)}>
          <TextField
            className={clsx(className, styles.input, styles.big)}
            color="secondary"
            // id="filled-error-helper-text"
            label="Imię i nazwisko*"
            placeholder="Imię i nazwisko"
            variant="filled"
            // fullWidth={true}
            minLength={10}
            name="name"
            type="name"
            // value={this.state.post.name}
            // onChange={e => this.setPostParam('name', e.target.value)}
          />
          <TextField
            className={clsx(className, styles.input, styles.big)}
            color="secondary"
            // id="outlined-multiline-static"
            label="E-mail*"
            rows={1}
            placeholder="example@gmail.com"
            variant="filled"
            name="email"
            type="email"
            // value={this.state.post.email}
            // onChange={e => this.setPostParam('email', e.target.value)}
          />

          <TextField
            className={clsx(className, styles.input, styles.big)}
            color="secondary"
            id="outlined-multiline-static"
            label="Telefon"
            rows={1}
            placeholder="0 700 880 774"
            variant="filled"
            name="phone"
            type="phone"
            // value={this.state.post.phone}
            // onChange={e => this.setPostParam('phone', e.target.value)}
          />
        </div>
        <div className={clsx(className, styles.group)}>
          <TextField
            className={clsx(className, styles.input, styles.big)}
            color="secondary"
            // id="outlined-multiline-static"
            label="Miejscowość*"
            rows={1}
            placeholder="Warszawa"
            variant="filled"
            name="city"
            type="city"
            // value={this.state.post.city}
            // onChange={e => this.setPostParam('city', e.target.value)}
          />
          <TextField
            className={clsx(className, styles.input, styles.big)}
            color="secondary"
            // id="outlined-multiline-static"
            label="Ulica*"
            rows={1}
            placeholder="Piękna"
            variant="filled"
            name="street"
            type="street"
            // value={this.state.post.street}
            // onChange={e => this.setPostParam('street', e.target.value)}
          />
          <div className={clsx(className, styles.input, styles.big)}>
            <TextField
              className={clsx(className, styles.input, styles.small)}
              color="secondary"
              // id="outlined-multiline-static"
              label="Nr. domu*"
              rows={1}
              placeholder="69"
              variant="filled"
              name="house"
              type="house"
              // value={this.state.post.house}
              // onChange={e => this.setPostParam('house', e.target.value)}
            />
            <TextField
              className={clsx(className, styles.input, styles.small)}
              color="secondary"
              // id="outlined-multiline-static"
              label="Nr. mieszkania*"
              rows={1}
              placeholder="Piękna"
              variant="filled"
              name="flat"
              type="flat"
              // value={this.state.post.flat}
              // onChange={e => this.setPostParam('flat', e.target.value)}
            />
          </div>
        </div>
        <TextField
          className={clsx(className, styles.input)}
          color="secondary"
          // id="outlined-multiline-static"
          label="Dodatkowe informacje dla sprzedającego"
          variant="filled"
          multiline
          rows={2}
          placeholder="Proszę o..."
          fullWidth={true}
          minLength={20}
          name="content"
          type="content"
          // value={this.state.post.content}
          // onChange={e => this.setPostParam('content', e.target.value)}
        />
      </div>
    </div>
    {/* <div className={clsx(className, styles.contact)}></div> */}
    {/* <div className={clsx(className, styles.dates)}>
        <div>
          <h4>Data publikacji:</h4>
          <p>{formatDate(new Date())}</p>
        </div>
        <div>
          <h4>Status ogłoszenia:</h4>
          <p>Szkic</p>
        </div>
        <div>
          <h4>Data ostatniej aktualizacji:</h4>
          <p>
            {actualisationDate === publicationDate
              ? formatDate(new Date())
              : actualisationDate}
          </p>
        </div>
      </div> */}
    <p className={clsx(className, styles.asterisk)}>
      * Pola oznaczone gwiazdką są wymagane!
    </p>
  </form>
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
  Component as Form,
  // Container as Form,
  Component as FormComponent,
};
