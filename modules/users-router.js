var express = require('express');
var router = express.Router();
var users = require('./users');

router.get('/', function (req, res) {
	users.readUsers('', function(result) {
		res.json(result);
	});
});

module.exports = router;