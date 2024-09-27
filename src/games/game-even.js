import * as dialogue from '../dialogue.js';
import * as math from '../math.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const QUESTION_COUNT = 3;
const MAX_NUM = 100;

const getExpectedResponse = (num) => {
  if (math.isEven(num)) {
    return 'yes';
  }

  return 'no';
};

const run = (userName) => {
  dialogue.printDescription(GAME_DESCRIPTION);

  let counter = 0;
  while (counter < QUESTION_COUNT) {
    const num = math.getRandomInt(MAX_NUM);
    dialogue.printQuestion(num);

    const expectAnsw = getExpectedResponse(num);
    const receivAnsw = dialogue.requestAndGetAnswer();

    if (expectAnsw === receivAnsw) {
      dialogue.printConfirm();
      counter += 1;
    } else {
      dialogue.printFailure(expectAnsw, receivAnsw, userName);
      break;
    }

    if (counter === QUESTION_COUNT) {
      dialogue.congradulateUser(userName);
    }
  }
};

export default run;
