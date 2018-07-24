/* eslint-env mocha */

import dispatch from '../dispatch';

require('chai').should();

describe('dispatch', () => {
  it('should return error when there is not enough parameters', () => {
    dispatch().should.equal(0);
    dispatch([0]).should.equal(0);
    dispatch([0, 1]).should.equal(1);
  });
});
