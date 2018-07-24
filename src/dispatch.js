import { info, error } from './utils/console';
import { generator } from './generator';

export default function dispatch(argv, program) {
  if (!argv || argv.length < 2) {
    return 0;
  }

  const [action, cmd, targetPath] = argv.length > 2 ? argv : [...argv, './'];
  switch (action) {
    case 'g':
      info(`> start generating ${cmd}`);
      generator(cmd, targetPath, program);
      info(`> end generating ${cmd}`);

      break;
    default:
      error(`Unknown action: ${action}`);
      break;
  }

  return 1;
}
