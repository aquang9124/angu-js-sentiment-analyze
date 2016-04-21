var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

app.listen(8000, function() {
	console.log("The server is listening on port 8000");
});