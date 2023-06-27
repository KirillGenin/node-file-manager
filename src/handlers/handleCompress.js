import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { printErrorMessage, getAbsolutePath } from '../utils/index.js';
import { join, basename, dirname, isAbsolute } from 'node:path';

export async function handleCompress(pathToFile, pathToNewDir) {
  const pathToFileAbs = getAbsolutePath(pathToFile);
  const fileName = basename(pathToFileAbs);
  const pathToNewFile = isAbsolute(pathToNewDir)
    ? join(pathToNewDir, `${fileName}.br`)
    : join(dirname(pathToFileAbs), pathToNewDir, `${fileName}.br`);

  try {
    const rs = createReadStream(pathToFileAbs);
    const ws = createWriteStream(pathToNewFile);
    await pipeline(rs, createBrotliCompress(), ws);
  } catch {
    printErrorMessage();
  }
}
