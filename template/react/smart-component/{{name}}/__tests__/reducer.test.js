/* eslint-env jest */

import reducer from '../reducer';
import { add, minus } from '../actions';

test('should make 0 as default amount', () => {
  expect(reducer(undefined, { type: 'notexist' })).toEqual({
    amount: 0,
  });
});

test('should add amount for add() action', () => {
  const state = { amount: 100 };
  expect(reducer(state, add())).toEqual({
    amount: 101,
  });
});

test('should minus amount for minu() action', () => {
  const state = { amount: 100 };
  expect(reducer(state, minus())).toEqual({
    amount: 99,
  });
});
