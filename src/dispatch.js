import { step, error } from './utils/console';
import { generator } from './generator';

export default function dispatch(argv, program) {
  if (!argv || argv.length < 2) {
    return 0;
  }

  const [action, cmd, targetPath] = argv.length > 2 ? argv : [...argv, './'];
  switch (action) {
    case 'g':
      step(`start generating ${cmd}`);
      generator(cmd, targetPath, program);
      break;
    default:
      error(`Unknown action: ${action}`);
      break;
  }

  return 1;
}
