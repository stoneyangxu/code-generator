import { info, error } from './utils/console';

export default function dispatch(argv, program) {
  if (!argv || argv.length < 2) {
    return 0;
  }
  const [action, templateName] = argv;
  switch (action) {
    case 'g':
      info('generate', templateName);
      break;
    default:
      error(`Unknown action: ${action}`);
      break;
  }

  return 1;
}
