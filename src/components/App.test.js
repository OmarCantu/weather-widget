import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const wrapper = shallow(<App />);

test('renders without crashing', () => { wrapper });

test('App has one main tag', () => {
  expect(wrapper.find('main')).toHaveLength(1);
});

test('App has one WidgetEditor component', () => {
  expect(wrapper.find('WidgetEditor')).toHaveLength(1);
});

test('App has one div tag with role="separator"', () => {
  expect(wrapper.find('div[role="separator"]')).toHaveLength(1);
});

test('App has one Widget component', () => {
  expect(wrapper.find('Widget')).toHaveLength(1);
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});

