import { buildTemplatePath } from './utils/build-path';

export default [
  {
    cmd: 'editorconfig',
    templatePath: buildTemplatePath('basic/.editorconfig'),
    desc: '.editorconfig file',
  },
  {
    cmd: 'mocha-spec',
    templatePath: buildTemplatePath('mocha/<%=name%>.spec.js'),
    desc: 'A spec for mocha with chai and sinon',
  },
];
