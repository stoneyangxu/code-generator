/* eslint-env jest */

import path from 'path';
import { buildTemplatePath, buildTargetPath } from '../build-path';

test('should build absolute path by relative path', () => {
  expect(
    buildTemplatePath('.editorconfig').endsWith(
      `${path.sep}code-generator${path.sep}template${path.sep}.editorconfig`,
    ),
  ).toBeTruthy();
});

test('should get current path', () => {
  expect(
    buildTargetPath('.').endsWith(`${path.sep}code-generator`),
  ).toBeTruthy();

  expect(
    buildTargetPath('./').endsWith(`${path.sep}code-generator`),
  ).toBeTruthy();
});

test('should build target path', () => {
  expect(
    buildTargetPath('./targetPath').endsWith(
      `${path.sep}code-generator${path.sep}targetPath`,
    ),
  ).toBeTruthy();
});
