var express = require('express');
var router = express.Router();
var users = require('./users');

function resonse(err, result, res) {
	if (err) {
		res.json({
			error: err
		});
	} else {
		res.json(result);
	}
}

router.get('/users', function (req, res) {
	users.readUsers({
		surname: req.query.surname || '',
		page: req.query.page || 0,
		size: req.query.size || 25,
	}, function(err, result) {
		resonse(err, result, res);
	});
});

router.post('/user', function (req, res) {
	users.addUser(req.body, function(err, result) {
		resonse(err, result, res);
	});

});

router.get('/user/:id', function (req, res) {
	users.readUser(req.params.id, function(err, result) {
		resonse(err, result, res);
	});
});

router.put('/user/:id', function (req, res) {
	users.updatedUser(req.body, function(err, result) {
		resonse(err, result, res);
	});
});

router.delete('/user/:id', function (req, res) {
	users.deleteUser(req.params.id, function(err, result) {
		resonse(err, result, res);
	});
});

module.exports = router;