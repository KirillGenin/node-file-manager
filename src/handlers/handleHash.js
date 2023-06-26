import { printErrorMessage, getAbsolutePath } from '../utils/index.js';
import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';

export async function handleHash(pathToFile) {
  const pathToFileAbs = getAbsolutePath(pathToFile);

  try {
    const data = await readFile(pathToFileAbs);
    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
  } catch {
    printErrorMessage();
  }
}
