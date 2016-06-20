'use strict';

/**
 * Node modules
 */
const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 3000;
const http    = require('http').Server(app);
const io      = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('User connected via socket.io!');

	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);

		socket.broadcast.emit('message', message);
	});

	socket.emit('message', {
		text: 'Welcome to the chat application!'
	});
});
  
http.listen(PORT, function () {
	console.log('Server started on port:' + PORT);
});