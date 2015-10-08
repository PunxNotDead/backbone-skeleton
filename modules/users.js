var client = require('./postgres').client;

function readUsers(surname, callback) {
	var query = client.query("SELECT id, name, surname, salary FROM emploees ORDER BY id ASC;");
	var results = [];

	query.on('row', function(row) {
		results.push(row);
	});

	query.on('end', function() {
		callback(results);
	});
};

function addUser(data, callback) {
	client.query("INSERT INTO emploees(name, surname, salary) values($1, $2, $3) RETURNING id", [data.name, data.surname, data.salary], function(err, result) {
		if (err) {
			callback(err);
		} else {
			callback(null, result.rows[0]);
		}

	});
};

exports.readUsers = readUsers;
exports.addUser = addUser;
