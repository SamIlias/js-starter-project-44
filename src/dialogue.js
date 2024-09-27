import * as cli from './cli.js';

const PRIMARY_GREETING = 'Welcome to the Brain Games!';
const USER_NAME_REQUEST = 'May I have your name? ';
const REQUEST = 'Your answer: ';
const CONFIRMATION = 'Correct!';
const QUESTION_PREFIX = 'Question: ';

export const printPrimaryGreeting = () => {
  cli.print(PRIMARY_GREETING);
};

export const printUserGreeting = (name) => {
  cli.print(`Hello, ${name}!`);
};

export const printDescription = (description) => {
  cli.print(description);
};

export const requestAndGetUserName = () => {
  const userName = cli.askAndGetResponse(USER_NAME_REQUEST);
  return userName;
};

export const requestAndGetAnswer = () => {
  const response = cli.askAndGetResponse(REQUEST);
  return response;
};

export const printQuestion = (question) => {
  cli.print(`${QUESTION_PREFIX}${question}`);
};

export const printConfirm = () => {
  cli.print(CONFIRMATION);
};

export const printFailure = (expectAnsw, receivAnsw, userName) => {
  const res = `"${receivAnsw}" is wrong answer ;(. Correct answer was "${expectAnsw}".
Let's try again, ${userName}!`;
  cli.print(res);
};

export const congradulateUser = (userName) => {
  const congrad = `Congratulations, ${userName}!`;
  cli.print(congrad);
};
