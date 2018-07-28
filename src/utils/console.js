import chalk from 'chalk';

function isTest() {
  return process.env.NODE_ENV === 'test';
}

function debug(...args) {
  // eslint-disable-next-line no-console
  console.debug(...args);
}

function log(...args) {
  if (!isTest()) {
    // eslint-disable-next-line no-console
    console.log(chalk.gray(args));
  }
}

function info(...args) {
  if (!isTest()) {
    // eslint-disable-next-line no-console
    console.log(chalk.green(args));
  }
}

function step(...args) {
  if (!isTest()) {
    // eslint-disable-next-line no-console
    console.log(chalk.yellow(args));
  }
}

function error(...args) {
  if (!isTest()) {
    // eslint-disable-next-line no-console
    console.log(chalk.red(args));
  }
}

export { debug, log, info, error, step };
