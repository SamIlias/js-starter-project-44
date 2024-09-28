import app from '../index.js';
import * as math from '../math.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_NUM = 100;

const getExpression = () => {
  const num = math.getRandomInt(MAX_NUM);
  return num;
};

const getExpectedAnswer = (num) => {
  if (math.isEven(num)) {
    return 'yes';
  }

  return 'no';
};

const runGame = () => {
  app(GAME_DESCRIPTION, getExpectedAnswer, getExpression);
};

export default runGame;
