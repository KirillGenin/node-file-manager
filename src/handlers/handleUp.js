import path from 'node:path';

export function handleUp() {
  const pathToUpperDir = path.parse(process.cwd()).dir;
  process.chdir(pathToUpperDir);
}
