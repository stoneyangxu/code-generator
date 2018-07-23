import path from 'path';

export default function buildPath(relativePath) {
  return path.resolve(__dirname, '../../template/', relativePath);
}
