/* eslint-env jest */

import * as index from '../index';

test('should export reducer and component', () => {
  expect(index.reducer).toBeDefined();
  expect(index.<%=name_UpperCamel%>).toBeDefined();
});
