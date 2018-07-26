import ejs from 'ejs';
import fs from 'fs-extra';

export function replaceFileName(filePath, data) {
  const template = ejs.compile(filePath, {});
  return template(data);
}

export function replaceFileContent(filePath, data) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const template = ejs.compile(content, {});
    const newContent = template(data);
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }
}
