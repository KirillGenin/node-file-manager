import { createReadStream } from 'node:fs';
import { printErrorMessage, getAbsolutePath } from '../utils/index.js';

export async function handleCat(pathToFile) {
  const pathToFileAbs = getAbsolutePath(pathToFile);

  return new Promise((resolve) => {
    const rs = createReadStream(pathToFileAbs, { encoding: 'utf-8' });
    let data = '';

    rs.on('data', (chunk) => {
      data += chunk;
    });

    rs.on('end', () => {
      console.log(data);
    });

    rs.on('error', () => {
      printErrorMessage();
    });

    rs.on('close', resolve);
  });
}
