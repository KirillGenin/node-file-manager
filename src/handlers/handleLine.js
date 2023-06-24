import { printcwd, INPUT_ERROR_MESSAGE } from '../utils/index.js';
import { handleUp } from './handleUp.js';

export function handleLine(rl, line) {
  const [cmd, ...args] = line.trim().replace(/\s+/g, ' ').split(' ');

  if (cmd === 'up' && args.length === 0) {
    handleUp();
  } else if (cmd === '.exit' && args.length === 0) {
    rl.close();
    return;
  } else {
    console.error(INPUT_ERROR_MESSAGE);
  }

  printcwd();
  rl.prompt();
}
