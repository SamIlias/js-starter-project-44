import readlineSync from 'readline-sync';

const askAndGetResponse = (question) => {
  const result = readlineSync.question(question);
  return result;
};

const print = (value) => {
  console.log(value);
};

export { print, askAndGetResponse };
