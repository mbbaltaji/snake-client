/* This module is responsible for user input from stdin (keyboard)
   it two functions: setupInput that takes in raw input from stdin 
   and handleUserInput that handles the raw input    */ 

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



const cannedMessage = {
  '1': 'Say: Let the games begin',
  2: 'Say: Better luck next time',
  3: 'Say: GG',
  4: 'Say: That was fun'
}


// Callback function that terminates game when ctrl+c is pressed
const handleUserInput = function(input) {
  
  if (input === '\u0003')
    process.exit();
  
  // Handles WSAD input form stdin
  switch (input) {
  case 'w':
    connection.write('Move: up');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  default:
    break;
  }

  if (cannedMessage[input]) {
    connection.write(cannedMessage[input]);
  }
};

module.exports = { setupInput };