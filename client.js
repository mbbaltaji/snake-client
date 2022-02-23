const net = require('net');

//establish a connection with the game server
const connect = function () {
  // conn object represents the connection with the server
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding("utf8");

  // display message from server when data event occurs
  conn.on('data', (message) =>{
    console.log('Server says: ', message);
  });

  conn.on('connect', () =>{
    console.log('Successfully connected to game server');
  });

  conn.write('Name: Moo');

  return conn;
};

module.exports = { connect };