/* eslint-env mocha */

import sinon from 'sinon';
import path from 'path';
import fs from 'fs-extra';
import * as console from '../../utils/console';
import generator from '../generator';
import * as ejsReplace from '../ejs-replace';

require('chai').should();

describe('generator', () => {
  let fsMock = null;
  let ejsReplaceMock = null;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
    ejsReplaceMock = sinon.mock(ejsReplace);
    sinon.spy(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
    ejsReplaceMock.restore();
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
    copyExpcetation.verify();
  });

  it('should copy template with ejs variables in name', () => {
    fsMock.expects('ensureDirSync');
    const copyExpcetation = fsMock
      .expects('copySync')
      .once()
      .withArgs(path.resolve('./template/mocha', '<%=name%>.spec.js'), path.resolve('./', 'generator.spec.js'));

    generator('mocha-spec', './', {
      name: 'generator',
    });
    copyExpcetation.verify();
  });

  it('should replace content with ejs variables inside template file', () => {
    fsMock.expects('ensureDirSync');
    fsMock.expects('copySync');

    const expectation = ejsReplaceMock.expects('replaceFileContent').once();

    generator('mocha-spec', './', {
      name: 'generator',
    });

    expectation.verify();
  });
});
