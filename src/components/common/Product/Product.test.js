import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

describe('Component Product', () => {
  it('should render without crashing', () => {
    const products = [
      {
        id: 'id',
        classType: 'classType',
        photo1: 'photo1',
        title: 'title',
        description: 'description',
        price: { priceMin: 'priceMin' },
      },
    ];

    const component = shallow(<ProductComponent products={products} />);
    expect(component).toBeTruthy();
  });
});
