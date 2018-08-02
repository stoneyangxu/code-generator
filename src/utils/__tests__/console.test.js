/* eslint-env jest */

import { debug, step, log, info, error } from '../console';

it('should should call console.log', () => {
  // eslint-disable-next-line no-console
  console.log = jest.fn();
  debug('some message');
  step('some message');
  log('some message');
  info('some message');
  error('some message');

  // eslint-disable-next-line no-console
  expect(console.log.mock.calls.length).toBe(4);
});
