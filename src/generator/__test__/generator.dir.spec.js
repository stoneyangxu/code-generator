/* eslint-env mocha */

import path from 'path';
import rimraf from 'rimraf';
import fs from 'fs-extra';
import generator from '../generator';

require('chai').should();

describe('generator.dir', () => {
  const mockDir = path.resolve(__dirname, 'mockDir');

  beforeEach(() => {
    rimraf.sync(mockDir);
  });

  afterEach(() => {
    rimraf.sync(mockDir);
  });

  it('is a example test', async () => {
    await generator('nodejs-with-mocha', mockDir, {
      name: 'new-project',
    });

    const result = await fs.exists(path.resolve(mockDir, 'new-project'));
    result.should.equal(true);
  });
});
