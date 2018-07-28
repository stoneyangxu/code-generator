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

  it('should should print error message when cmd not found', async () => {
    await generator('notExistCmd');
    console.error.calledOnce.should.equal(true);
  });

  it('should print error message when target path is not directory', async () => {
    await generator('editorconfig', './package.json');
    console.error.calledOnce.should.equal(true);
  });

  it('should make sure that target path is exist', async () => {
    const expcetation = fsMock.expects('ensureDir').once();
    fsMock.expects('copy');
    await generator('editorconfig', './');
    expcetation.verify();
  });

  it('should copy template to target path', async () => {
    fsMock.expects('ensureDirSync');
    const copyExpcetation = fsMock
      .expects('copy')
      .once()
      .withArgs(path.resolve('./template/basic', '.editorconfig'), path.resolve('./', '.editorconfig'));

    await generator('editorconfig', './');
    copyExpcetation.verify();
  });

  it('should copy template with ejs variables in name', async () => {
    fsMock.expects('ensureDir');
    const copyExpcetation = fsMock
      .expects('copy')
      .once()
      .withArgs(path.resolve('./template/mocha', '<%=name%>.spec.js'), path.resolve('./', 'generator.spec.js'));

    await generator('mocha-spec', './', {
      name: 'generator',
    });
    copyExpcetation.verify();
  });

  it('should replace content with ejs variables inside template file', async () => {
    fsMock.expects('ensureDir');
    fsMock.expects('copy');

    const expectation = ejsReplaceMock.expects('replaceFileContent').once();

    await generator('mocha-spec', './', {
      name: 'generator',
    });

    expectation.verify();
  });
});
