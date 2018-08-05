/* eslint-env jest */

import { add, minus } from '../actions';
import * as ActionTypes from '../actionTypes';

test('should build add action', () => {
  expect(add()).toEqual({
    type: ActionTypes.<%=name_Upper%>_ADD,
  });
});

test('should return minus action', () => {
  expect(minus()).toEqual({
    type: ActionTypes.<%=name_Upper%>_MINUS,
  });
});
