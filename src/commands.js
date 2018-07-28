import { buildTemplatePath } from './utils/build-path';

export default [
  {
    cmd: 'editorconfig',
    templatePath: buildTemplatePath('basic/.editorconfig'),
    desc: '.editorconfig file',
  },
  {
    cmd: 'gitignore',
    templatePath: buildTemplatePath('basic/.gitignore'),
    desc: '.gitignore file for npm project',
  },
  {
    cmd: 'mocha-spec',
    templatePath: buildTemplatePath('mocha/<%=name%>.spec.js'),
    desc: 'A spec for mocha with chai and sinon',
  },
];
