/* eslint-env mocha */

import { buildTemplatePath, buildTargetPath } from '../build-path';

require('chai').should();

describe('buildTemplatePath', () => {
  it('should build absolute path by relative path', () => {
    buildTemplatePath('.editorconfig')
      .endsWith('/code-generator/template/.editorconfig')
      .should.equal(true);
  });
});

describe('buildTargetPath', () => {
  it('should get current path', () => {
    buildTargetPath('.')
      .endsWith('/code-generator')
      .should.equal(true);

    buildTargetPath('./')
      .endsWith('/code-generator')
      .should.equal(true);
  });

  it('should build target path', () => {
    buildTargetPath('./targetPath')
      .endsWith('/code-generator/targetPath')
      .should.equal(true);
  });
});
