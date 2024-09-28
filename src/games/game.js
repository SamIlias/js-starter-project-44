import * as cli from '../cli.js';

const PRIMARY_GREETING = 'Welcome to the Brain Games!';
const USER_GREETING = 'Hello, ';
const USER_NAME_REQUEST = 'May I have your name? ';

const runGame = () => {
  cli.print(PRIMARY_GREETING);

  const userName = cli.askAndGetResponse(USER_NAME_REQUEST);
  cli.print(`${USER_GREETING}${userName}!`);
};

export default runGame;
