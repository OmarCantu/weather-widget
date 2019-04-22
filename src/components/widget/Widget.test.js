import React from 'react';
import { shallow } from 'enzyme';

import { DUMMY_WEATHER_OBJECT } from '../../constants/dummyData';
import { METRIC, ON } from '../../constants/main';

import Widget from './Widget';

const wrapper = shallow(
  <Widget 
    className='custom'
    data={DUMMY_WEATHER_OBJECT}
    title='Widget'
    units={METRIC}
    windOption={ON}
  />
);

test('Widget has a "custom" class', () => {
  expect(wrapper.find('.custom')).toHaveLength(1);
});

test('Widget has one h2 tag with content "Widget"', () => {
  expect(wrapper.find('h2').text()).toEqual('Widget');
});

test('Widget has one img tag with alt "sunny"', () => {
  expect(wrapper.find('img[alt="sunny"]')).toHaveLength(1);
});

test('Widget has one h3 tag with content "Sydney"', () => {
  expect(wrapper.find('h3').text()).toEqual('Sydney');
});

test('Widget has one strong tag with content "22°"', () => {
  expect(wrapper.find('strong').text()).toEqual('22°');
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});