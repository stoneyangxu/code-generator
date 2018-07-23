import * as console from '_better-console@1.0.1@better-console';
import chalk from 'chalk';

function log(...args) {
  console.log(chalk.gray(args));
}

function info(...args) {
  console.log(chalk.green(args));
}

function step(...args) {
  console.log(chalk.bgYellow(args));
}

function error(...args) {
  console.log(chalk.red(args));
}

export { log, info, error, step };
