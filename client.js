const net = require('net');
const { IP, port } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    IP,
    port
  });

  conn.setEncoding("utf8");
  conn.on('data', (message) => {
    console.log('Server says: ', message);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    console.log('Game Started!')
    conn.write('Name: Moo');
  });

  return conn;
};

module.exports = { connect };