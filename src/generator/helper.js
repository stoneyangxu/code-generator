import { log, info } from '../utils/console';
import commands from '../commands';

function printGeneratorHelper() {
  info('Available generator commands: ');
  commands.forEach(({ cmd, desc }) => {
    info(`\t${cmd} - ${desc}`);
  });
}

export function printHelp() {
  log();
  log('    g       Generates new code base on boilerplates');
  log();
  printGeneratorHelper();
}

export function getCmdConfig(cmd) {
  return commands.find(config => config.cmd === cmd);
}
