const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, CANNED_MESSAGES, CTRL_C} = require('./constants');
let connection; //to store conn object from client


//setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};



// Callback function that terminates game when ctrl+c is pressed
const handleUserInput = function(input) {

  // Handles WSAD input form stdin
  switch (input) {
  case CTRL_C:
    process.exit();
  case MOVE_UP_KEY:
    connection.write('Move: up');
    break;
  case MOVE_LEFT_KEY:
    connection.write('Move: left');
    break;
  case MOVE_DOWN_KEY:
    connection.write('Move: down');
    break;
  case MOVE_RIGHT_KEY:
    connection.write('Move: right');
    break;
  default:
    break;
  }

  if (CANNED_MESSAGES[input]) {
    connection.write(CANNED_MESSAGES[input]);
  }
};

module.exports = { setupInput };