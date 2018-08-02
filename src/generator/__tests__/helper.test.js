/* eslint-env jest */

import { printHelp, getCmdConfig } from '../index';

test('should print help message without error', () => {
  // eslint-disable-next-line no-console
  console.log = jest.fn();
  printHelp();
  // eslint-disable-next-line no-console
  expect(console.log).toHaveBeenCalled();
});

test('should get config for .editorconfig', () => {
  const config = getCmdConfig('editorconfig');

  expect(config.cmd).toBe('editorconfig');
  expect(config.desc).toBe('.editorconfig file');
  expect(config.templatePath.endsWith('basic/.editorconfig')).toBeTruthy();
});

test('should get undefined for not exist command', () => {
  const config = getCmdConfig('not exist command');
  expect(config).toBeUndefined();
});
