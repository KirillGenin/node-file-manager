export function getUserName(argv) {
  const userNameArg = argv.find((a) => a.includes('--username='));
  return userNameArg ? userNameArg.split('=')[1] : 'Anonymous';
}
