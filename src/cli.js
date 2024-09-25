import readlineSync from 'readline-sync';

const askAndGetResponse = (question) => {
  const result = readlineSync.question(question);
  return result;
};

const greet = () => {
  const name = askAndGetResponse('May I have your name? ');

  console.log(`Hello, ${name}!`)
};

export {greet};

