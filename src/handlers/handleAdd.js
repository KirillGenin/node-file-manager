import { open } from 'node:fs';
import path from 'node:path';
import { printErrorMessage } from '../utils/index.js';

export async function handleAdd(newFileName) {
  const pathToFile = path.join(process.cwd(), newFileName);

  return new Promise((resolve) => {
    open(pathToFile, 'wx', (err) => {
      if (err) printErrorMessage();
      resolve();
    });
  });
}
