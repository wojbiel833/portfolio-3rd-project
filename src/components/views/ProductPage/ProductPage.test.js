import React from 'react';
import { shallow } from 'enzyme';
import { ProductPageComponent } from './ProductPage';

describe('Component ProductPage', () => {
  const price = {
    priceVariants: {
      price: 'price',
      variants: 'variants',
      map: function () {},
    },
  };

  const fetchAllProducts = function () {};

  it('should render without crashing', () => {
    const component = shallow(
      <ProductPageComponent price={price} fetchAllProducts={fetchAllProducts} />
    );
    expect(component).toBeTruthy();
  });
});
