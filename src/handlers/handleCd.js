import { OPERATION_ERROR_MESSAGE, getAbsolutePath } from '../utils/index.js';

export function handleCd(pathToDir) {
  const pathToDirAbs = getAbsolutePath(pathToDir);

  try {
    process.chdir(pathToDirAbs);
  } catch {
    console.error(OPERATION_ERROR_MESSAGE);
  }
}
