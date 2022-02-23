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
    //send server username
    conn.write('Name: Moo');
    //move up one block
    
    setInterval(() =>{
      conn.write('Move: up');
    },500);
    setInterval(() =>{
      conn.write('Move: right');
    },1000);
    setInterval(() =>{
      conn.write('Move: down');
    },1500);
    setInterval(() =>{
      conn.write('Move: left');
    }, 2000);
  });

  

  

  return conn;
};

module.exports = { connect };