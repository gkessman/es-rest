var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// configure app

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// use middleware

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// define routes

app.use(require('./routes'));

// Start server

app.listen(3000, function() {
	console.log('Running on port 3000');
});