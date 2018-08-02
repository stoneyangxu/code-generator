/* eslint-env jest */

import { printHelp, getCmdConfig } from '../index';

it('should print help message without error', () => {
  // eslint-disable-next-line no-console
  console.log = jest.fn();
  printHelp();
  // eslint-disable-next-line no-console
  expect(console.log).toHaveBeenCalled();
});

it('should get config for .editorconfig', () => {
  const config = getCmdConfig('editorconfig');

  expect(config.cmd).toBe('editorconfig');
  expect(config.desc).toBe('.editorconfig file');
  expect(config.templatePath.endsWith('basic/.editorconfig')).toBeTruthy();
});

it('should get undefined for not exist command', () => {
  const config = getCmdConfig('not exist command');
  expect(config).toBeUndefined();
});
