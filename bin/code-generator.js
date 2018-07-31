#!/usr/bin/env node
const program = require('commander');
const { printHelp } = require('../lib/generator');
const dispatch = require('../lib/dispatch').default;
const { error } = require('../lib/utils/console');

program
  .usage('<action> <command> <targetPath> [options]')
  .option('-n, --name <name>', 'name')
  .option(
    '-v, --variable <key1=value1;key2=value2;key3=value3...>',
    'custom variables',
  )
  .on('--help', printHelp)
  .parse(process.argv);

dispatch(program.args, program).then(result => {
  if (result === 0) {
    error('There is not enough parameters!');
    program.help();
    process.exit(0);
  }
});
