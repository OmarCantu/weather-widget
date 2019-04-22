import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

const wrapper = shallow(
  <TextInput 
    className='custom'
    name='textinput'
    placeholder='Enter text'
  />
);

test('TextInput has class "custom"', () => {
  expect(wrapper.find('.custom')).toHaveLength(1);
});

test('TextInput has one input tag with name="textinput"', () => {
  expect(wrapper.find('input[name="textinput"]')).toHaveLength(1);
});

test('TextInput has one input tag with placeholder="Enter text"', () => {
  expect(wrapper.find('input[placeholder="Enter text"]')).toHaveLength(1);
});

test('TextInput has no label tags', () => {
  expect(wrapper.find('label')).toHaveLength(0);
});

test('TextInput has one label tag with content "Input label" after injecting label prop', () => {
  wrapper.setProps({ label: 'Input label' });
  expect(wrapper.find('label').text()).toEqual('Input label');
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});