import { printErrorMessage, getAbsolutePath } from '../utils/index.js';
import { rename } from 'node:fs/promises';
import { join, dirname } from 'node:path';

export async function handleRn(pathToFile, newFileName) {
  const pathToFileAbs = getAbsolutePath(pathToFile);
  const pathToNewFile = join(dirname(pathToFileAbs), newFileName);

  try {
    await rename(pathToFileAbs, pathToNewFile);
  } catch {
    printErrorMessage();
  }
}
