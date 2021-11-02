import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Button } from '../../common/Button/Button';

import { connect } from 'react-redux';
import { sendFormData } from '../../../redux/ordersRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import TextField from '@mui/material/TextField';

import styles from './Form.module.scss';

class Component extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    city: '',
    street: '',
    house: '',
    flat: '',
    content: '',
  };

  setContactData = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  submitForm = e => {
    console.log('submitForm');
    e.preventDefault();

    const cartProducts = this.props.cart;
    console.log(cartProducts);
    const { name, email, phone, city, street, house, flat, content } =
      this.state;
    console.log(name, email, phone, city, street, house, flat, content);
    let error = null;

    if (error === null) {
      const orderInfo = {
        orderedProducts: cartProducts,
        name: name,
        email: email,
        phone: phone,
        city: city,
        street: street,
        house: house,
        flat: flat,
        content: content,
      };
      this.props.sendForm(orderInfo);
      // this.setState({ error: null });
      console.log('udało się', orderInfo);
    } else {
      this.setState({ error });

      console.log('nie udało się');
    }
  };
  render() {
    const { className, children, sendForm, cart } = this.props;
    return (
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
              onClick={this.submitForm}
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
                // minLength={10}
                name="name"
                type="name"
                value={this.state.name}
                onChange={e => this.setContactData('name', e.target.value)}
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
                value={this.state.email}
                onChange={e => this.setContactData('email', e.target.value)}
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
                value={this.state.phone}
                onChange={e => this.setContactData('phone', e.target.value)}
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
                value={this.state.city}
                onChange={e => this.setContactData('city', e.target.value)}
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
                value={this.state.street}
                onChange={e => this.setContactData('street', e.target.value)}
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
                  value={this.state.house}
                  onChange={e => this.setContactData('house', e.target.value)}
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
                  value={this.state.flat}
                  onChange={e => this.setContactData('flat', e.target.value)}
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
              // minLength={20}
              name="content"
              type="content"
              value={this.state.content}
              onChange={e => this.setContactData('content', e.target.value)}
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
  }
}

Component.propTypes = {
  children: PropTypes.node,
  cart: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  sendForm: PropTypes.func,
};

const mapStateToProps = state => ({
  // someProp: reduxSelector(state),
});

const mapDispatchToProps = dispatch => ({
  sendForm: data => dispatch(sendFormData(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Form,
  Container as Form,
  Component as FormComponent,
};
