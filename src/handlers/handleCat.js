import { createReadStream } from 'node:fs';
import { OPERATION_ERROR_MESSAGE, getAbsolutePath } from '../utils/index.js';

export async function handleCat(pathToFile) {
  const pathToFileAbs = getAbsolutePath(pathToFile);

  return new Promise((resolve, reject) => {
    const rs = createReadStream(pathToFileAbs, { encoding: 'utf-8' });
    let data = '';

    rs.on('data', (chunk) => {
      data += chunk;
    });

    rs.on('end', () => {
      console.log(data);
      resolve();
    });

    rs.on('error', () => {
      console.log(OPERATION_ERROR_MESSAGE);
      reject();
    });
  });
}
