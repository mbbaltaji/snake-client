const { connect } = require('./client');

console.log('connecting ...');
connect();

//setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  ///handle user input received from stdin (keyboard) on data event
  stdin.on('data', handleUserInput);
  return stdin;
};

// Callback function that terminates game when ctrl+c is pressed
const handleUserInput = function(input) {
  if(input === '\u0003'){
    process.exit();
  }
}

setupInput();

