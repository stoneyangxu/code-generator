import { info } from '../utils/console';
import commands from '../commands';

export function printGeneratorHelper() {
  info('Available generator commands: ');
  commands.forEach(({ cmd, desc }) => {
    info(`\t${cmd} - ${desc}`);
  });
}

export function getCmdConfig(cmd) {
  return cmdPaths.find(config => config.cmd === cmd);
}
