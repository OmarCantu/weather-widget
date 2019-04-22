import React from 'react';
import { shallow } from 'enzyme';

import RadioButtonInput from './RadioButtonInput';

const wrapper = shallow(
  <RadioButtonInput 
    checked
    className='custom'
    label='Option 1'
    name='option1'
    value='option1'
  />
);

test('RadioButtonInput has class "custom"', () => {
  expect(wrapper.find('.custom')).toHaveLength(1);
});

test('RadioButtonInput has one span tag', () => {
  expect(wrapper.find('span')).toHaveLength(1);
});

test('RadioButtonInput has one input tag with name="option1"', () => {
  expect(wrapper.find('input[name="option1"]')).toHaveLength(1);
});

test('RadioButtonInput has one input tag with value="option1"', () => {
  expect(wrapper.find('input[value="option1"]')).toHaveLength(1);
});

test('RadioButtonInput has one label tag with content "Option 1"', () => {
  expect(wrapper.find('label').text()).toEqual('Option 1');
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});