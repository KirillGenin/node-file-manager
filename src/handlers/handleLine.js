import { printcwd, INPUT_ERROR_MESSAGE } from '../utils/index.js';
import { handleUp } from './handleUp.js';
import { handleCd } from './handleCd.js';
import { handleLs } from './handleLs.js';
import { handleCat } from './handleCat.js';
import { handleAdd } from './handleAdd.js';
import { handleRn } from './handleRn.js';
import { handleCp } from './handleCp.js';
import { handleMv } from './handleMv.js';
import { handleRm } from './handleRm.js';

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
  } else if (cmd === 'add' && argsSize === 1) {
    const [newFileName] = args;
    await handleAdd(newFileName);
  } else if (cmd === 'rn' && argsSize === 2) {
    const [pathToFile, newFileName] = args;
    await handleRn(pathToFile, newFileName);
  } else if (cmd === 'cp' && argsSize === 2) {
    const [pathToFile, pathToNewDir] = args;
    await handleCp(pathToFile, pathToNewDir);
  } else if (cmd === 'mv' && argsSize === 2) {
    const [pathToFile, pathToNewDir] = args;
    await handleMv(pathToFile, pathToNewDir);
  } else if (cmd === 'rm' && argsSize === 1) {
    const [pathToFile] = args;
    await handleRm(pathToFile);
  } else if (cmd === '.exit' && argsSize === 0) {
    rl.close();
    return;
  } else {
    console.log('\x1b[33m' + INPUT_ERROR_MESSAGE + '\x1b[0m');
  }

  printcwd();
  rl.prompt();
}
