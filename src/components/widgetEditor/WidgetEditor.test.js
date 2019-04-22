import React from 'react';
import { shallow } from 'enzyme';

import { METRIC, ON } from '../../constants/main';

import WidgetEditor from './WidgetEditor';

const wrapper = shallow(
  <WidgetEditor 
    className='custom'
    units={METRIC}
    windOption={ON}
  />
);

test('WidgetEditor has a "custom" class', () => {
  expect(wrapper.find('.custom')).toHaveLength(1);
});

test('WidgetEditor has one TextInput component', () => {
  expect(wrapper.find('TextInput')).toHaveLength(1);
});

test('WidgetEditor has one RadioButtonInput component', () => {
  expect(wrapper.find('RadioButtonInput')).toHaveLength(4);
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});