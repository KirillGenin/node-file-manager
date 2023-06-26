import { printcwd, INPUT_ERROR_MESSAGE } from '../utils/index.js';
import { handleUp } from './handleUp.js';
import { handleCd } from './handleCd.js';
import { handleLs } from './handleLs.js';
import { handleCat } from './handleCat.js';

export async function handleLine(rl, line) {
  const [cmd, ...args] = line.trim().replace(/\s+/g, ' ').split(' ');
  const argsSize = args.length;

  if (cmd === 'up' && argsSize === 0) {
    handleUp();
  } else if (cmd === 'cd' && argsSize === 1) {
    const [pathToDir] = args;
    handleCd(pathToDir);
  } else if (cmd === 'ls' && argsSize === 0) {
    await handleLs();
  } else if (cmd === 'cat' && argsSize === 1) {
    const [pathToFile] = args;
    await handleCat(pathToFile);
  } else if (cmd === '.exit' && argsSize === 0) {
    rl.close();
    return;
  } else {
    console.error(INPUT_ERROR_MESSAGE);
  }

  printcwd();
  rl.prompt();
}
