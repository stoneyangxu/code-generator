/* eslint-env jest */

import path from 'path';
import { buildTemplatePath, buildTargetPath } from '../build-path';

it('should build absolute path by relative path', () => {
  expect(
    buildTemplatePath('.editorconfig').endsWith(
      `${path.sep}code-generator${path.sep}template${path.sep}.editorconfig`,
    ),
  ).toBeTruthy();
});

it('should get current path', () => {
  expect(
    buildTargetPath('.').endsWith(`${path.sep}code-generator`),
  ).toBeTruthy();

  expect(
    buildTargetPath('./').endsWith(`${path.sep}code-generator`),
  ).toBeTruthy();
});

it('should build target path', () => {
  expect(
    buildTargetPath('./targetPath').endsWith(
      `${path.sep}code-generator${path.sep}targetPath`,
    ),
  ).toBeTruthy();
});
