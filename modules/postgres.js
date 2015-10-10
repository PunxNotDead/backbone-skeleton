var pg = require('pg');
var config = require('../config/config.json');

var connectionString = config.pgConenctionString;

var client = new pg.Client(connectionString);
client.connect();

exports.client = client;
