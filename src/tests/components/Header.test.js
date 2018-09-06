import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // we automatically setup enzyme-to-json in jest.config.json
  // expect(toJSON(wrapper)).toMatchSnapshot();

  // Enzyme
  // expect(wrapper.find('h1').text()).toBe('Expensify');
  
  // React test renderer
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
