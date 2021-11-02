import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

describe('Component Cart', () => {
  const cart = [
    {
      id: 'id',
      _id: '_id',
      title: 'title',
      priceDescription: 'priceDescription',
      price: 'price',
      amount: 'amount',
      additionalComment: 'additionalComment',
    },
  ];

  const fetchCart = function () {};

  it('should render without crashing', () => {
    const component = shallow(
      <CartComponent cart={cart} fetchCart={fetchCart} />
    );
    expect(component).toBeTruthy();
  });
});
