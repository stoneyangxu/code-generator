import fs from 'fs-extra';
import path from 'path';

import { step, error } from '../utils/console';
import { getCmdConfig } from './helper';
import { buildTargetPath } from '../utils/build-path';
import { replaceFileName, replaceFileContent } from './ejs-replace';

function getFileName(templatePath) {
  return path.basename(templatePath);
}

function parseCmdAndConfig(cmd, targetPath) {
  const config = getCmdConfig(cmd);
  if (config) {
    const absoluteTargetPath = buildTargetPath(targetPath);
    if (
      !fs.existsSync(absoluteTargetPath) ||
      fs.lstatSync(absoluteTargetPath).isDirectory()
    ) {
      return { config, absoluteTargetPath };
    }
    error(`Target path is a file: ${absoluteTargetPath}`);
    return {};
  }
  error(`Unknowd command ${cmd}`);
  return {};
}

function buildTargetTemplateName(absoluteTargetPath, config, data) {
  const targetTemplateName = path.resolve(
    absoluteTargetPath,
    getFileName(config.templatePath),
  );
  return replaceFileName(targetTemplateName, data);
}

async function replaceFilenameAndContents(filePath, program) {
  const fstat = await fs.stat(filePath);
  if (fstat.isDirectory()) {
    const filesInDirectory = await fs.readdir(filePath);
    await Promise.all(
      filesInDirectory.map(filename =>
        replaceFilenameAndContents(path.resolve(filePath, filename), program),
      ),
    );
  } else {
    const replacedFileName = replaceFileName(filePath, program);
    step(`replace template content by parameters: ${replacedFileName}`);
    await fs.rename(filePath, replacedFileName);
    await replaceFileContent(replacedFileName, program);
  }
}

export default async function generator(cmd, targetPath, program) {
  step(`generating ${cmd}`);
  const { config, absoluteTargetPath } = parseCmdAndConfig(cmd, targetPath);
  step(absoluteTargetPath);

  if (absoluteTargetPath) {
    await fs.ensureDir(absoluteTargetPath);
    const targetTemplateName = buildTargetTemplateName(
      absoluteTargetPath,
      config,
      program,
    );

    step(`copy template to ${targetTemplateName}`);
    await fs.copy(config.templatePath, targetTemplateName);
    await replaceFilenameAndContents(targetTemplateName, program);
  }
}
