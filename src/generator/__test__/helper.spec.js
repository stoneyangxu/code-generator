/* eslint-env mocha */

import { printHelp, getCmdConfig } from '../index';

require('chai').should();

describe('printHelp', () => {
  it('should print help message without error', () => {
    printHelp();
  });
});

describe('getCmdConfig', () => {
  it('should get config for .editorconfig', () => {
    const config = getCmdConfig('editorconfig');
    config.cmd.should.equal('editorconfig');
    config.desc.should.equal('.editorconfig file');
    config.templatePath.endsWith('basic/.editorconfig').should.equal(true);
  });

  it('should get undefined for not exist command', () => {
    const config = getCmdConfig('not exist command');
    (typeof config).should.be.equal('undefined');
  });
});
