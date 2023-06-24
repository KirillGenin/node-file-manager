import { printcwd } from '../utils/index.js';

export function handleLine(rl, line) {
  if (line === '.exit') {
    rl.close();
  } else {
    console.log(`Received: ${line}`);
    printcwd();
    rl.prompt();
  }
}
