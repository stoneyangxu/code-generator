/* eslint-env mocha */

import sinon from 'sinon';
import path from 'path';
import <%=name%> from '../<%=name%>';

require('chai').should();

describe('<%=name%>', () => {
  beforeEach(() => {
  });

  afterEach(() => {
  });

  it('is a example test', () => {
    const sum = 1 + 2;
    sum.should.equal(3);
  });
});
