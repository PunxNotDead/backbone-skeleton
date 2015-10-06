var client = require('./postgres').client;

function readUsers(surname, callback) {
	var query = client.query("SELECT * FROM emploees ORDER BY id ASC;");
	var results = [];

	query.on('row', function(row) {
		results.push(row);
	});

	query.on('end', function() {
		callback(results);
	});
};

exports.readUsers = readUsers;
