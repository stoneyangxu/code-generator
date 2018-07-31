/* eslint-env mocha */

import parameterParser from '../parameterParser';

require('chai').should();

describe('parameterParser', () => {
  it('should parse name in commander program', () => {
    const program = {
      name: 'nameValue',
    };
    const parameters = parameterParser(program);
    parameters.name.should.equal('nameValue');
  });

  it('should parse other parameters in variable parameter', () => {
    const program = {
      name: 'nameValue',
      variable: 'key1=value1;key2=value2',
    };
    const parameters = parameterParser(program);
    parameters.key1.should.equal('value1');
    parameters.key2.should.equal('value2');
  });

  it('should skip invalid parameter in variable string', () => {
    const program = {
      name: 'nameValue',
      variable: 'key1=value1;key2',
    };
    const parameters = parameterParser(program);
    parameters.key1.should.equal('value1');
    (typeof parameters.key2).should.equal('undefined');
  });
});
