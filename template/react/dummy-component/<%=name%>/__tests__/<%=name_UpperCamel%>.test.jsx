/* eslint-env jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import <%=name_UpperCamel%> from '../<%=name_UpperCamel%>';

Enzyme.configure({ adapter: new Adapter() });

test('should render text', () => {
  const wrapper = shallow(
    <<%=name_UpperCamel%> text="some text" />,
  );

  expect(wrapper.find('.<%=name%>').text()).toBe('some text');
});
