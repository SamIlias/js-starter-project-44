import app from '../index.js';
import * as math from '../math.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';
const MAX_FIRST_ELEM = 10;
const MAX_LENGTH_PROGRASSION = 15;
const MIN_LENGTH_PROGRASSION = 5;
const MAX_STEP = 20;
const HIDDEN = '..';

const hideRandomElement = (coll) => {
  const collToHandle = [...coll];
  const elementToHideIndex = math.getRandomInt(coll.length);

  collToHandle[elementToHideIndex] = HIDDEN;

  return collToHandle;
};

const getExpression = () => {
  const firstElement = math.getRandomInt(MAX_FIRST_ELEM);
  const step = math.getRandomInt(MAX_STEP);
  const rangeOfLength = MAX_LENGTH_PROGRASSION - MIN_LENGTH_PROGRASSION;
  const lengthProgression = math.getRandomInt(rangeOfLength) + MIN_LENGTH_PROGRASSION;

  const progression = math.getProgression(firstElement, step, lengthProgression);

  const progrWithHidden = hideRandomElement(progression);

  return progrWithHidden.join(' ');
};

const getExpectedAnswer = (expression) => {
  const coll = expression.split(' ').filter((i) => i);
  const lastIndex = coll.length - 1;
  let res;

  if (coll[0] === HIDDEN) {
    const second = Number(coll[1]);
    const third = Number(coll[2]);
    const d = third - second;

    res = second - d;
  }

  if (coll[lastIndex] === HIDDEN) {
    const prev = Number(coll[lastIndex - 1]);
    const beforePrev = Number(coll[lastIndex - 2]);
    const d = prev - beforePrev;

    res = prev + d;
  }

  for (let i = 1; i < lastIndex; i += 1) {
    if (coll[i] === HIDDEN) {
      const prev = Number(coll[i - 1]);
      const next = Number(coll[i + 1]);

      res = (prev + next) / 2;
    }
  }

  return res.toString();
};

const runGame = () => {
  app(GAME_DESCRIPTION, getExpectedAnswer, getExpression);
};

export default runGame;
