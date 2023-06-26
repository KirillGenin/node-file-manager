import { printErrorMessage, getAbsolutePath } from '../utils/index.js';
import { join, basename, dirname, isAbsolute } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { rm } from 'node:fs/promises';

export async function handleCp(pathToFile, pathToNewDir) {
  const pathToFileAbs = getAbsolutePath(pathToFile);
  const fileName = basename(pathToFileAbs);
  const pathToNewFile = isAbsolute(pathToNewDir)
    ? join(pathToNewDir, fileName)
    : join(dirname(pathToFileAbs), pathToNewDir, fileName);

  try {
    const rs = createReadStream(pathToFileAbs, { encoding: 'utf-8' });
    const ws = createWriteStream(pathToNewFile);
    await pipeline(rs, ws);
  } catch {
    rm(pathToNewFile, { force: true }).catch();
    printErrorMessage();
  }
}
