var pg = require('pg');

var connectionString = 'postgres://postgres:123@localhost/provita';

var client = new pg.Client(connectionString);
client.connect();

exports.client = client;
