#!/usr/bin/env node
const program = require('commander');
const { printGeneratorHelper } = require('../lib/generator/helper');

function printHelp() {
  console.log();
  console.log('    g       Generates new code base on boilerplates');
  console.log();
  printGeneratorHelper();
}

program
  .usage('<command> [options]')
  .option('-n, --name <n>', 'name')
  .option('-v, --variable <key1=value1,key2=value2,key3=value3...>', 'custom variables')
  .on('--help', printHelp)
  .parse(process.argv);
