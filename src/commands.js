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
    cmd: 'es6-module',
    templatePath: buildTemplatePath('js/<%=name%>.js'),
    desc: 'A javascript module with es6 export',
  },
  {
    cmd: 'mocha-spec',
    templatePath: buildTemplatePath('mocha/<%=name%>.spec.js'),
    desc: 'A spec for mocha with chai and sinon',
  },
  {
    cmd: 'jest-test',
    templatePath: buildTemplatePath('jest/<%=name%>.test.js'),
    desc: 'A test in jest',
  },
  {
    cmd: 'nodejs-with-mocha',
    templatePath: buildTemplatePath('nodejs/with-mocha/<%=name%>'),
    desc: 'A nodejs project with mocha',
  },
  {
    cmd: 'nodejs-with-jest',
    templatePath: buildTemplatePath('nodejs/with-jest/<%=name%>'),
    desc: 'A nodejs project with jest',
  },
  {
    cmd: 'react-smart-component',
    templatePath: buildTemplatePath('react/smart-component/<%=name%>'),
    desc: 'A smart react component',
  },
];
