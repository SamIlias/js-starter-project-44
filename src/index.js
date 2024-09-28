import * as cli from './cli.js';

const PRIMARY_GREETING = 'Welcome to the Brain Games!';
const USER_GREETING = 'Hello, ';
const USER_NAME_REQUEST = 'May I have your name? ';
const ANSWER_REQUEST = 'Your answer: ';
const CONFIRMATION = 'Correct!';
const QUESTION_PREFIX = 'Question: ';
const CONGRAD_USER = 'Congratulations, ';
const QUESTION_COUNT = 3;

const getFailureString = (receivedAnswer, expectedAnswer, userName) => {
  const resString = `"${receivedAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".
  Let's try again, ${userName}!`;

  return resString;
};

const app = (gameDescription, getExpectedAnswer, getExpression) => {
  cli.print(PRIMARY_GREETING);

  const userName = cli.askAndGetResponse(USER_NAME_REQUEST);
  cli.print(`${USER_GREETING}${userName}!`);

  cli.print(gameDescription);

  let counter = 0;
  while (counter < QUESTION_COUNT) {
    const expression = getExpression();

    cli.print(`${QUESTION_PREFIX}${expression}`);

    const expectAnsw = getExpectedAnswer(expression);
    const receivAnsw = cli.askAndGetResponse(ANSWER_REQUEST);

    if (expectAnsw === receivAnsw) {
      cli.print(CONFIRMATION);
      counter += 1;
    } else {
      cli.print(getFailureString(receivAnsw, expectAnsw, userName));
      break;
    }

    if (counter === QUESTION_COUNT) {
      cli.print(`${CONGRAD_USER}${userName}!`);
    }
  }
};

export default app;
