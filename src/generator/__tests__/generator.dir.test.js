/* eslint-env jest */

import path from 'path';
import rimraf from 'rimraf';
import fs from 'fs-extra';
import generator from '../generator';

const mockDir = path.resolve(__dirname, 'mockDir');

beforeEach(() => {
  rimraf.sync(mockDir);
});

afterEach(() => {
  rimraf.sync(mockDir);
});

test('is a example test', async () => {
  await generator('nodejs-with-mocha', mockDir, {
    name: 'new-project',
  });

  const result = await fs.exists(path.resolve(mockDir, 'new-project'));
  expect(result).toBeTruthy();
});
