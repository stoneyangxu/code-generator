// jest.config.js
module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!template/**',
  ],
  testURL: 'http://localhost/',
  testRegex: 'src/.*\\.test\\.js$',
};
