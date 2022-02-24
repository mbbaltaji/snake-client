const IP = 'localhost';
const port = 50541;
const MOVE_UP_KEY = 'w';
const MOVE_LEFT_KEY = 'a';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'd';
const CTRL_C = '\u0003';

const CANNED_MESSAGES = {
  1: 'Say: Let the games begin',
  2: 'Say: Better luck next time',
  3: 'Say: GG',
  4: 'Say: That was fun'
}

module.exports = { 
  IP, 
  port,
  CTRL_C,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  CANNED_MESSAGES
};
