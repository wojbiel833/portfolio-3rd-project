import React from 'react';
import { shallow } from 'enzyme';
import { NavBarComponent } from './NavBar';

describe('Component NavBar', () => {
  const cart = [{}];
  it('should render without crashing', () => {
    const component = shallow(<NavBarComponent cart={cart} />);
    expect(component).toBeTruthy();
  });
});
