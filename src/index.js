import * as readline from 'node:readline';
import { homedir } from 'node:os';
import { getUserName, printcwd } from './utils/index.js';
import { handleLine } from './handlers/handleLine.js';

const userName = getUserName(process.argv);

process.chdir(homedir());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl.on('line', (line) => {
  handleLine(rl, line);
});

rl.on('close', () => {
  console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
});

console.log(`Welcome to the File Manager, ${userName}!`);
printcwd();
rl.prompt();
