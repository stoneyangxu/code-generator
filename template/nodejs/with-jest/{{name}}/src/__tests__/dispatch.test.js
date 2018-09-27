/* eslint-env jest */

import dispatch from '../dispatch';
import * as console from '../utils/console';

test('should return error when there is not enough parameters', async () => {
  try {
    await dispatch();
  } catch (e) {
    expect(e.message).toBe('Not enough parameters');
  }

  try {
    await dispatch([0]);
  } catch (e) {
    expect(e.message).toBe('Not enough parameters');
  }
});
