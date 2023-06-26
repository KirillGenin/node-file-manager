import { isAbsolute, join } from 'node:path';

export function getAbsolutePath(path) {
  return isAbsolute(path) ? path : join(process.cwd(), path);
}
