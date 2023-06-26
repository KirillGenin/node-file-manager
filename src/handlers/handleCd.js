import { printErrorMessage, getAbsolutePath } from '../utils/index.js';

export function handleCd(pathToDir) {
  const pathToDirAbs = getAbsolutePath(pathToDir);

  try {
    process.chdir(pathToDirAbs);
  } catch {
    printErrorMessage();
  }
}
