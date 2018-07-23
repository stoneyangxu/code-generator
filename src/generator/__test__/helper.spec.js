/* eslint-env mocha */

import { getCmdConfig } from '../helper';

require('chai').should();

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
