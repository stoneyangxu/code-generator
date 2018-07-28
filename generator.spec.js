/* eslint-env mocha */

import sinon from 'sinon';
import path from 'path';
import generator from '../generator';

require('chai').should();

describe('generator', () => {
  beforeEach(() => {
  });

  afterEach(() => {
  });

  it('is a example test', () => {
    const sum = 1 + 2;
    sum.should.equal(3);
  });
});
