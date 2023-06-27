import { EOL, cpus, homedir, userInfo } from 'node:os';
import { printErrorMessage } from '../utils/index.js';

export function handleOs(option) {
  switch (option.slice(2)) {
    case 'EOL':
      console.log(JSON.stringify(EOL));
      break;
    case 'cpus':
      const cpusLog = cpus().map((cpu) => {
        const { model, speed } = cpu;
        return {
          Model: model,
          ClockRate: `${speed / 1000} GHz`,
        };
      });
      console.table(cpusLog);
      break;
    case 'homedir':
      console.log(homedir());
      break;
    case 'username':
      const { username } = userInfo();
      console.log(username);
      break;
    case 'architecture':
      console.log(process.arch);
      break;
    default:
      printErrorMessage();
  }
}
