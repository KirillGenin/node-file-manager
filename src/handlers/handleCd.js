import path from 'node:path';
import { OPERATION_ERROR_MESSAGE } from '../utils/index.js';

export function handleCd(pathToDir) {
  const pathToDirAbs = path.isAbsolute(pathToDir)
    ? pathToDir
    : path.join(process.cwd(), pathToDir);

  try {
    process.chdir(pathToDirAbs);
  } catch {
    console.error(OPERATION_ERROR_MESSAGE);
  }
}
