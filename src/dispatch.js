import { info, error } from './utils/console';
import { generator } from './generator';

export default async function dispatch(argv, program) {
  if (!argv || argv.length < 2) {
    throw new Error('Not enough parameters');
  }

  const [action, cmd, targetPath] = argv.length > 2 ? argv : [...argv, './'];
  switch (action) {
    case 'g':
      info(`> start generating ${cmd}`);
      await generator(cmd, targetPath, program);
      info(`> end generating ${cmd}`);

      break;
    case 'add':
      info(`> start adding ${cmd}`);
      // await add(cmd, targetPath, program);
      info(`> end adding ${cmd}`);

      break;
    default:
      error(`Unknown action: ${action}`);
      break;
  }
}
