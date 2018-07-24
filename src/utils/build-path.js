import path from 'path';

export function buildTemplatePath(relativePath) {
  return path.resolve(__dirname, '../../template/', relativePath);
}

export function buildTargetPath(relativePath) {
  return path.resolve(relativePath);
}
