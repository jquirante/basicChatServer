var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log(new Date()+ 'Received request for ' + request.url);
})