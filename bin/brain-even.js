#!/usr/bin/env node
import * as dialogue from '../src/dialogue.js';
import run from '../src/games/game-even.js';

dialogue.printPrimaryGreeting();

const userName = dialogue.requestAndGetUserName();
dialogue.printUserGreeting(userName);

run(userName);
