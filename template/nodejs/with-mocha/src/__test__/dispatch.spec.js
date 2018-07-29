/* eslint-env mocha */

import sinon from 'sinon';
import dispatch from '../dispatch';
import * as console from '../utils/console';

require('chai').should();

describe('dispatch', () => {
  beforeEach(() => {
    sinon.spy(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });

  it('should return error when there is not enough parameters', async () => {
    try {
      await dispatch();
    } catch (e) {
      e.message.should.equal('Not enough parameters');
    }

    try {
      await dispatch([0]);
    } catch (e) {
      e.message.should.equal('Not enough parameters');
    }
  });
});
