/* eslint-env jest */

import parameterParser from '../parameterParser';

test('should parse name in commander program', () => {
  const program = {
    name: 'nameValue',
  };
  const parameters = parameterParser(program);
  expect(parameters.name).toBe('nameValue');
});

test('should parse other parameters in variable parameter', () => {
  const program = {
    name: 'nameValue',
    variable: 'key1=value1;key2=value2',
  };
  const parameters = parameterParser(program);

  expect(parameters.key1).toBe('value1');
  expect(parameters.key2).toBe('value2');
});

test('should skip invalid parameter in variable string', () => {
  const program = {
    name: 'nameValue',
    variable: 'key1=value1;key2',
  };
  const parameters = parameterParser(program);
  expect(parameters.key1).toBe('value1');
  expect(parameters.key2).toBeUndefined();
});
