/* eslint-env mocha */

import { debug, step, log, info, error } from '../console';

require('chai').should();

describe('console', () => {
  it('should should call console.log', () => {
    debug('some message');
    step('some message');
    log('some message');
    info('some message');
    error('some message');
  });
});
