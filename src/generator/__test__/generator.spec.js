/* eslint-env mocha */

import sinon from 'sinon';
import path from 'path';
import fs from 'fs-extra';
import * as console from '../../utils/console';
import generator from '../generator';

require('chai').should();

describe('generator', () => {
  let fsMock = null;

  beforeEach(() => {
    fsMock = sinon.mock(fs);

    sinon.spy(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
    fsMock.restore();
  });

  it('should should print error message when cmd not found', () => {
    generator('notExistCmd');
    console.error.calledOnce.should.equal(true);
  });

  it('should print error message when target path is not directory', () => {
    generator('editorconfig', './package.json');
    console.error.calledOnce.should.equal(true);
  });

  it('should make sure that target path is exist', () => {
    const expcetation = fsMock.expects('ensureDirSync').once();
    fsMock.expects('copySync');
    generator('editorconfig', './');
    expcetation.verify();
  });

  it('should copy template to target path', () => {
    fsMock.expects('ensureDirSync');
    const copyExpcetation = fsMock
      .expects('copySync')
      .once()
      .withArgs(path.resolve('./template/basic', '.editorconfig'), path.resolve('./', '.editorconfig'));

    generator('editorconfig', './');
    console.debug(copyExpcetation.args);
    copyExpcetation.verify();
  });
});
