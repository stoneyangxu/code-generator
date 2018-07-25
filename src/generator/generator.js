import fs from 'fs-extra';
import path from 'path';

import { debug, step, error } from '../utils/console';
import { getCmdConfig } from './helper';
import { buildTargetPath } from '../utils/build-path';

function getFileName(templatePath) {
  return path.basename(templatePath);
}

export default function generator(cmd, targetPath, program) {
  step(`generating ${cmd}`);
  const config = getCmdConfig(cmd);
  if (config) {
    const absoluteTargetPath = buildTargetPath(targetPath);
    if (fs.lstatSync(absoluteTargetPath).isDirectory()) {
      // todo copy files
      fs.ensureDirSync(absoluteTargetPath);
      const targetTemplateName = path.resolve(absoluteTargetPath, getFileName(config.templatePath));
      fs.copySync(config.templatePath, targetTemplateName);
      debug(program);
      step(`copy template to ${targetTemplateName}`);
    } else {
      error(`Target path is a file: ${absoluteTargetPath}`);
    }
  } else {
    error(`Unknowd command ${cmd}`);
  }
}
