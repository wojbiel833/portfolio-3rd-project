import React from 'react';
import { shallow } from 'enzyme';
import { MainLayoutComponent } from './MainLayout';

describe('Component MainLayout', () => {
  const fetchAllProducts = function () {};
  const fetchCart = function () {};
  it('should render without crashing', () => {
    const component = shallow(
      <MainLayoutComponent
        fetchAllProducts={fetchAllProducts}
        fetchCart={fetchCart}
      />
    );
    expect(component).toBeTruthy();
  });
});
