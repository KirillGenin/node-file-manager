import { readdir } from 'node:fs/promises';

export async function handleLs() {
  const dirContent = await readdir(process.cwd(), { withFileTypes: true });

  const directories = [];
  const files = [];

  dirContent.forEach((content) => {
    if (content.isDirectory()) {
      directories.push({ Name: content.name, Type: 'directory' });
    } else if (content.isFile()) {
      files.push({ Name: content.name, Type: 'file' });
    }
  });

  const sortString = (a, b) =>
    a['Name'].toLowerCase() > b['Name'].toLowerCase() ? 1 : -1;

  const dirContentFormat = [].concat(
    directories.slice().sort(sortString),
    files.slice().sort(sortString)
  );

  console.table(dirContentFormat);
}
