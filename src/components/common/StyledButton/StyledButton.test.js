import React from 'react';
import { shallow } from 'enzyme';
import { StyledButtonComponent } from './StyledButton';

describe('Component StyledButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<StyledButtonComponent />);
    expect(component).toBeTruthy();
  });
});
