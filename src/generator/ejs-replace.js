import ejs from 'ejs';
import fs from 'fs-extra';

export function replaceFileName(filePath, data) {
  const template = ejs.compile(filePath, {});
  return template(data);
}

export async function replaceFileContent(filePath, data) {
  const filePathExist = await fs.exists(filePath);

  if (filePathExist) {
    const content = await fs.readFile(filePath, 'utf-8');
    const template = ejs.compile(content, {});
    const newContent = template(data);
    await fs.writeFile(filePath, newContent, 'utf-8');
  }
}
