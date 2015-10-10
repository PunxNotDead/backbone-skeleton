var client = require('./postgres').client;

function readUsers(params, callback) {
	var offset = (params.page - 1) * params.size;
	var query = client.query("SELECT id, name, surname, salary FROM employees WHERE surname LIKE $1 || '%' ORDER BY id ASC LIMIT $2 OFFSET $3;", [params.surname, params.size, offset]);
	var results = [];

	query.on('row', function(row) {
		results.push(row);
	});

	query.on('error', function(error) {
		callback(error);
	});

	query.on('end', function() {
		callback(null, results);
	});
};

function readUser(id, callback) {
	var query = client.query("SELECT id, name, surname, salary FROM employees WHERE  id = $1 LIMIT 1;", [id]);

	query.on('error', function(error) {
		callback(error);
	});

	query.on('row', function(row) {
		callback(null, row);
	});
};

function addUser(data, callback) {
	client.query("INSERT INTO employees(name, surname, salary) values($1, $2, $3) RETURNING id", [data.name, data.surname, data.salary], function(err, result) {
		if (err) {
			callback(err);
		} else {
			callback(null, result.rows[0]);
		}

	});
};

function updatedUser(data, callback) {
	client.query("UPDATE employees SET name = $2, surname = $3, salary = $4 WHERE id = $1 RETURNING id", [data.id, data.name, data.surname, data.salary], function(err, result) {
		if (err) {
			callback(err);
		} else {
			if (!result.rowCount) {
				callback(new Error('Model not found'));
			} else {
				callback(null, result.rows[0]);
			}
		}
	});
};

function deleteUser(id, callback) {
	client.query("DELETE FROM employees WHERE id = $1 RETURNING id", [id], function(err, result) {
		if (err) {
			callback(err);
		} else {
			if (!result.rowCount) {
				callback(new Error('Model not found'));
			} else {
				callback(null, result.rows[0]);
			}
		}
	});
};

exports.readUsers = readUsers;
exports.addUser = addUser;
exports.readUser = readUser;
exports.updatedUser = updatedUser;
exports.deleteUser = deleteUser;
