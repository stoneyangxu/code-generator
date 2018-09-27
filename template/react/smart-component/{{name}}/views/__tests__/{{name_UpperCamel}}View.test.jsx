/* eslint-env jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import <%=name_UpperCamel%>View from '../<%=name_UpperCamel%>View';

Enzyme.configure({ adapter: new Adapter() });

test('should render', () => {
  const wrapper = shallow(
    <<%=name_UpperCamel%>View amount={0} onAdd={() => {}} onMinus={() => {}} />,
  );

  expect(wrapper.find('.counter')).toBeDefined();
  expect(wrapper.find('.amount').text()).toBe('0');
  expect(wrapper.find('Button[icon="plus"]')).toBeDefined();
  expect(wrapper.find('Button[icon="minus"]')).toBeDefined();
});

test('should call onAdd when plus icon is click', () => {
  const onAdd = jest.fn();
  const wrapper = shallow(
    <<%=name_UpperCamel%>View amount={0} onAdd={onAdd} onMinus={() => {}} />,
  );

  wrapper.find('Button[icon="plus"]').simulate('click');

  expect(onAdd).toHaveBeenCalled();
});

test('should call onMinus when minus icon is click', () => {
  const onMinus = jest.fn();
  const wrapper = shallow(
    <<%=name_UpperCamel%>View amount={0} onAdd={() => {}} onMinus={onMinus} />,
  );

  wrapper.find('Button[icon="minus"]').simulate('click');

  expect(onMinus).toHaveBeenCalled();
});
