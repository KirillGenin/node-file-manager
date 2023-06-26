import { OPERATION_ERROR_MESSAGE } from './index.js';

export function printErrorMessage() {
  console.log('\x1b[31m' + OPERATION_ERROR_MESSAGE + '\x1b[0m');
}
