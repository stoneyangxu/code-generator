/* eslint-env jest */

import dispatch from '../dispatch';
import * as generator from '../generator';
import * as console from '../utils/console';

beforeEach(() => {
  generator.generator = jest.fn();
});

afterEach(() => {});

test('should return error when there is not enough parameters', async () => {
  try {
    await dispatch();
  } catch (e) {
    expect(e.message).toBe('Not enough parameters');
  }

  try {
    await dispatch([0]);
  } catch (e) {
    expect(e.message).toBe('Not enough parameters');
  }
});

test('should call generator when action is g', async () => {
  await dispatch(['g', 'editorconfig', './']);
  expect(generator.generator).toHaveBeenCalledTimes(1);
  expect(generator.generator).toHaveBeenLastCalledWith(
    'editorconfig',
    './',
    undefined,
  );
});

test('should make targetPath to be current if ignore the third parameter', async () => {
  await dispatch(['g', 'editorconfig']);
  expect(generator.generator).toHaveBeenCalledTimes(1);
  expect(generator.generator).toHaveBeenLastCalledWith(
    'editorconfig',
    './',
    undefined,
  );
});

test('should print error when action is unknown', async () => {
  console.error = jest.fn();
  await dispatch(['unknown-action', 'anything']);
  expect(console.error.mock.calls.length).toBe(1);
  expect(console.error.mock.calls[0]).toEqual([
    'Unknown action: unknown-action',
  ]);

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenLastCalledWith(
    'Unknown action: unknown-action',
  );
});
