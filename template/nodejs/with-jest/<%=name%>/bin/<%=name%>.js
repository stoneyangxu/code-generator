#!/usr/bin/env node
const program = require('commander');
const dispatch = require('../lib/dispatch').default;
const { info, error } = require('../lib/utils/console');

function printHelp() {
  info('print help message here.');
}

program
  .usage('<command> [options]')
  .option('-n, --name <name>', 'name')
  // .option('-v, --variable <key1=value1,key2=value2,key3=value3...>', 'custom variables')
  .on('--help', printHelp)
  .parse(process.argv);

dispatch(program.args, program)
  .then(result => {
    info(result);
    process.exit(1);
  })
  .catch(e => {
    error(e);
    program.help();
    process.exit(0);
  });
