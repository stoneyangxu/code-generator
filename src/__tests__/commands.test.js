/* eslint-env jest */

import commands from '../commands';

test('should have commands', () => {
  expect(commands.length).toBeGreaterThan(1);
});
