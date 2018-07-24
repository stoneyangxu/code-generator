/* eslint-env mocha */

import sinon from 'sinon';
import dispatch from '../dispatch';
import * as generator from '../generator';

require('chai').should();

describe('dispatch', () => {
  beforeEach(() => {
    sinon.stub(generator, 'generator');
  });

  afterEach(() => {
    generator.generator.restore();
  });

  it('should return error when there is not enough parameters', () => {
    dispatch().should.equal(0);
    dispatch([0]).should.equal(0);
    dispatch([0, 1]).should.equal(1);
    dispatch([0, 1, 2]).should.equal(1);
  });

  it('should call generator when action is g', () => {
    dispatch(['g', 'editorconfig', './']);
    generator.generator.calledOnce.should.equal(true);
    generator.generator.getCall(0).args[0].should.equal('editorconfig');
    generator.generator.getCall(0).args[1].should.equal('./');
  });

  it('should make targetPath to be current if ignore the 3rd parameter', () => {
    dispatch(['g', 'editorconfig']);
    generator.generator.calledOnce.should.equal(true);
    generator.generator.getCall(0).args[0].should.equal('editorconfig');
    generator.generator.getCall(0).args[1].should.equal('./');
  });
});
