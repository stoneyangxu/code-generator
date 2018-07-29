import { info, error } from './utils/console';

export default async function dispatch(argv, program) {
  if (!argv || argv.length < 2) {
    throw new Error('Not enough parameters');
  }

  info(...argv);
}
