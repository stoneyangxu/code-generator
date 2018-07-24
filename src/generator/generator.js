import fs from 'fs';
import { step, error } from '../utils/console';
import { getCmdConfig } from './helper';
import { buildTargetPath } from '../utils/build-path';

export default function generator(cmd, targetPath, program) {
  step(cmd, targetPath, program);
  const config = getCmdConfig(cmd);
  if (config) {
    const absoluteTargetPath = buildTargetPath(targetPath);
    if (!fs.existsSync(absoluteTargetPath)) {
      // todo copy files
    } else {
      error(`Target path is already exist: ${absoluteTargetPath}`);
    }
  } else {
    error(`Unknowd command ${cmd}`);
  }
}
