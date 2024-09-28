import app from '../index.js';
import * as math from '../math.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';
const MAX_NUM = 100;
const operators = ['+', '-', '*'];

const getRandomOperator = (operators) => {
  const num = operators.length - 1;
  const randomIndex = math.getRandomInt(num);

  return operators[randomIndex];
};

const getRandomExpression = () => {
  const a = math.getRandomInt(MAX_NUM);
  const b = math.getRandomInt(MAX_NUM);
  const oper = getRandomOperator(operators);
  
  const result = `${a} ${oper} ${b}`;
  return result;
};

const getExpectedAnswer = (expression) => {
  const coll = expression.split(' ');
  const a = Number(coll[0]);
  const b = Number(coll[2]);
  const operator = coll[1];
  let res;

  switch (operator) {
    case '+' : 
      res = a + b;
      break;
    case '-' :
      res = a - b;
      break;
    case '*' :
      res = a * b;
      break;
    default :
      return 'Invalid operator';
  }

  return res.toString();
};

const runGame = () => {
  app(GAME_DESCRIPTION, getExpectedAnswer, getRandomExpression);
};

export default runGame;
