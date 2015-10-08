var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressDomainMiddleware = require('express-domain-middleware');

var usersRouter = require('./modules/users-router');

var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(expressDomainMiddleware); 
app.use(express.static('static'));

app.use('/api', usersRouter);

app.use(function(err, req, res, next) {
	res.status(500).send({ errors: [ err.toString() ] });
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);
});