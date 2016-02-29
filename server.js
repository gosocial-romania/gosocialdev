// require deployd
var deployd = require('deployd');

// configure database etc. 
require("dotenv").load();
var server = deployd({
  port: process.env.PORT || 2403,
  env: process.env.ENV || 'development',
  db: {
    connectionString: process.env.CONNECTION_STRING || 'mongodb://bogdan:social2015@ds045475.mongolab.com:45475/gosocial'
  }
});

// start the server
server.listen();

// debug
server.on('listening', function () {
  console.log("Server is listening on port: " + (process.env.PORT || 2403));
});

// Deployd requires this
server.on('error', function (err) {
  console.error(err);
  process.nextTick(function () { // Give the server a chance to return an error
    process.exit();
  });
});