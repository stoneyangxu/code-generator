#!/usr/bin/env node
const program = require('commander');
const { printHelp } = require('../lib/generator/helper');

program
  .usage('<command> [options]')
  .option('-n, --name <n>', 'name')
  .option('-v, --variable <key1=value1,key2=value2,key3=value3...>', 'custom variables')
  .on('--help', printHelp)
  .parse(process.argv);
