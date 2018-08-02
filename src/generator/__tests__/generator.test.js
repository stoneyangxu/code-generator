/* eslint-env jest */

import path from 'path';
import fs from 'fs-extra';
import * as console from '../../utils/console';
import generator from '../generator';
import * as ejsReplace from '../ejs-replace';

beforeEach(() => {
  fs.ensureDir = jest.fn();
  fs.copy = jest.fn();
  fs.rename = jest.fn();
});

test('should should print error message when cmd not found', async () => {
  console.error = jest.fn();
  await generator('notExistCmd');
  expect(console.error).toHaveBeenCalled();
});

test('should print error message when target path is not directory', async () => {
  console.error = jest.fn();
  await generator('editorconfig', './package.json');
  expect(console.error).toHaveBeenCalled();
});

test('should make sure that target path is exist', async () => {
  fs.copy = jest.fn();
  fs.ensureDir = jest.fn();

  await generator('editorconfig', './');

  expect(fs.ensureDir).toHaveBeenCalled();
});

test('should copy template to target path', async () => {
  await generator('editorconfig', './');

  expect(fs.copy).toHaveBeenCalledTimes(1);
  expect(fs.copy).toHaveBeenLastCalledWith(
    path.resolve('./template/basic', '.editorconfig'),
    path.resolve('./', '.editorconfig'),
  );
});

test('should copy template with ejs variables in name', async () => {
  fs.stat = jest.fn();
  fs.stat.mockReturnValue({
    isDirectory: () => false,
  });

  await generator('mocha-spec', './', {
    name: 'generator',
  });

  expect(fs.copy).toHaveBeenCalledTimes(1);
  expect(fs.copy).toHaveBeenLastCalledWith(
    path.resolve('./template/mocha', '<%=name%>.spec.js'),
    path.resolve('./', 'generator.spec.js'),
  );
  expect(fs.rename).toHaveBeenCalledTimes(1);
});

test('should replace content with ejs variables inside template file', async () => {
  fs.stat.mockReturnValue({
    isDirectory: () => false,
  });

  ejsReplace.replaceFileContent = jest.fn();

  await generator('mocha-spec', './', {
    name: 'generator',
  });

  expect(ejsReplace.replaceFileContent).toHaveBeenCalledTimes(1);
});
