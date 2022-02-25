const IP = 'localhost';
const PORT = 50541;
const CTRL_C = '\u0003';

const  KEY_STROKES = {
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move: down',
  'd': 'Move: right',
  1: 'Say: Let the games begin',
  2: 'Say: Better luck next time',
  3: 'Say: GG',
  4: 'Say: That was fun'
};

module.exports = {
  IP,
  PORT,
  CTRL_C,
  KEY_STROKES
};
