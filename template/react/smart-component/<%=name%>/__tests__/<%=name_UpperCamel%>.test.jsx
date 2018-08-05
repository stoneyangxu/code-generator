/* eslint-env jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import <%=name_UpperCamel%> from '../<%=name_UpperCamel%>';
import * as ActionTypes from '../actionTypes';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
let store = null;
let wrapper = null;

beforeEach(() => {
  store = mockStore({ <%=name%>: { amount: 100 } });
  wrapper = shallow(<<%=name_UpperCamel%> store={store} />);
});

test('should render <%=name_UpperCamel%>View', () => {
  expect(wrapper.find('<%=name_UpperCamel%>View').prop('amount')).toBe(100);
});

test('should dispatch add action', () => {
  wrapper.simulate('add');

  const actions = store.getActions();
  expect(actions).toEqual([
    {
      type: ActionTypes.<%=name_Upper%>_ADD,
    },
  ]);
});

test('should dispatch minus action', () => {
  wrapper.simulate('minus');

  const actions = store.getActions();

  expect(actions).toEqual([
    {
      type: ActionTypes.<%=name_Upper%>_MINUS,
    },
  ]);
});
