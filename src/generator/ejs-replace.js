import ejs from 'ejs';
import fs from 'fs-extra';
import mustache from 'mustache';

export function replaceFileName(filePath, data) {
  return mustache.render(filePath, data);
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
