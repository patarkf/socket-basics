'use strict';

/**
 * Node modules
 */
const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 3000;
const http    = require('http').Server(app);

app.use(express.static(__dirname + '/public'));
  
http.listen(PORT, function() {
	console.log('Server started on port:' + PORT);
});