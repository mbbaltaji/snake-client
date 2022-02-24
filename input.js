/* This module is responsible for user input from stdin (keyboard)
   it two functions: setupInput that takes in raw input from stdin 
   and handleUserInput that handles the raw input */ 

let connection; //to store conn object from client


//setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  ///handle user input received from stdin (keyboard) when data event occurs
  stdin.on('data', handleUserInput);
  return stdin;
};

// Callback function that terminates game when ctrl+c is pressed
const handleUserInput = function(input) {
  
  if (input === '\u0003')
    process.exit();
  
  // Handles wsad input form stdin
  switch (input) {
  case '\u0077':
    connection.write('Move: up');
    break;
  case '\u0073':
    connection.write('Move: down');
    break;
  case '\u0061':
    connection.write('Move: left');
    break;
  case '\u0064':
    connection.write('Move: right');
    break;
  default:
    break;
  }
};

module.exports = { setupInput };