import { printErrorMessage, getAbsolutePath } from '../utils/index.js';
import { rm } from 'node:fs/promises';

export async function handleRm(pathToFile) {
  const pathToFileAbs = getAbsolutePath(pathToFile);

  try {
    await rm(pathToFileAbs);
  } catch {
    printErrorMessage();
  }
}
