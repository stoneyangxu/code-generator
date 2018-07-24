import { buildTemplatePath } from './utils/build-path';

export default [
  {
    cmd: 'editorconfig',
    templatePath: buildTemplatePath('basic/.editorconfig'),
    desc: '.editorconfig file',
  },
];
