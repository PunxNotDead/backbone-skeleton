var express = require('express');
var router = express.Router();
var users = require('./users');

router.get('/users', function (req, res) {
	users.readUsers('', function(result) {
		res.json(result);
	});
});

router.post('/user', function (req, res) {
	users.addUser(req.body, function(err, result) {
		if (err) {
			res.json({
				error: err
			});
		} else {
			res.json(result);
		}
	});

});

module.exports = router;