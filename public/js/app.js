'use strict';

var socket = io();

/**
 * Used to handle connection
 * 
 * @return void
 */
socket.on('connect', function () {
	console.log('Connected to Socket.io!');
});

/**
 * Used to handle a new user's message
 * 
 * @param Message object
 * @return void
 */
socket.on('message', function (message) {
	console.log('New message: ');
	console.log(message.text);
});