
const { KEY_STROKES, CTRL_C} = require('./constants');
let connection; 



/**
 * Accepts raw input from stdin char by char
 * @param  {object} conn
 * @returns {const} stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

/**
 * handles raw input char (key stroke)
 * @param  {*} input
 */
const handleUserInput = function(input) {

  if(input === CTRL_C)
    process.exit();

  if (KEY_STROKES[input]) {
    connection.write(KEY_STROKES[input]);
  }
};

module.exports = { setupInput };