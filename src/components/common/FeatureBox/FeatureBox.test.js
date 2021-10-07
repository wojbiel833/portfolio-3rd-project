import React from 'react';
import { shallow } from 'enzyme';
import { FeatureBoxComponent } from './FeatureBox';

describe('Component FeatureBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeatureBoxComponent />);
    expect(component).toBeTruthy();
  });
});
