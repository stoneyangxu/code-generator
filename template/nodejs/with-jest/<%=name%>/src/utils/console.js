import chalk from 'chalk';

function debug(...args) {
  // eslint-disable-next-line no-console
  console.debug(...args);
}

function log(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.gray(args));
}

function info(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.green(args));
}

function step(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.yellow(args));
}

function error(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.red(args));
}

export { debug, log, info, error, step };
