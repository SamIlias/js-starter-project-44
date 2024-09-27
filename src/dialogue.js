import * as cli from './cli.js';

const PRIMARY_GREETING = 'Welcome to the Brain Games!';
const USER_NAME_REQUEST = 'May I have your name? ';

const printUserGreeting = (name) => {
  cli.print(`Hello, ${name}!`);
};

const printPrimaryGreeting = () => {
  cli.print(PRIMARY_GREETING);
};

const requestAndGetUserName = () => {
  const userName = cli.askAndGetResponse(USER_NAME_REQUEST);
  return userName;
};

export { printUserGreeting, printPrimaryGreeting, requestAndGetUserName };