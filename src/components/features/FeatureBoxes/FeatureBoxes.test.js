import React from 'react';
import { shallow } from 'enzyme';
import { FeatureBoxesComponent } from './FeatureBoxes';

describe('Component FeatureBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeatureBoxesComponent />);
    expect(component).toBeTruthy();
  });
});
