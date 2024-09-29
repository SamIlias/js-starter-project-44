import app from '../index.js';
import * as math from '../math.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';
const MAX_NUM = 100;

const getExpression = () => {
  const a = math.getRandomInt(MAX_NUM);
  const b = math.getRandomInt(MAX_NUM);
  
  const result = `${a} ${b}`;
  return result;
};

const getExpectedAnswer = (expression) => {
  const coll = expression.split(' ');
  let a = Number(coll[0]);
  let b = Number(coll[1]);

  const res = math.gcd(a, b);
  return res.toString();
};

const runGame = () => {
  app(GAME_DESCRIPTION, getExpectedAnswer, getExpression);
};

export default runGame;
