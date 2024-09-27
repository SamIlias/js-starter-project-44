#!/usr/bin/env node
import * as dialogue from '../src/dialogue.js';

dialogue.printPrimaryGreeting();

const userName = dialogue.requestAndGetUserName();
dialogue.printUserGreeting(userName);
