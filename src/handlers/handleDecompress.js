import { createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { printErrorMessage, getAbsolutePath } from '../utils/index.js';
import { join, basename, dirname, isAbsolute } from 'node:path';

export async function handleDecompress(pathToFile, pathToNewDir) {
  const pathToFileAbs = getAbsolutePath(pathToFile);
  const fileName = basename(pathToFileAbs, '.br');
  const pathToNewFile = isAbsolute(pathToNewDir)
    ? join(pathToNewDir, fileName)
    : join(dirname(pathToFileAbs), pathToNewDir, fileName);

  try {
    const rs = createReadStream(pathToFileAbs);
    const ws = createWriteStream(pathToNewFile);
    await pipeline(rs, createBrotliDecompress(), ws);
  } catch {
    printErrorMessage();
  }
}
