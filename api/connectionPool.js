var mysql = require('mysql');

// connection settings
const dbHostName = 'kgot-database.cuitsbqfftu2.us-east-2.rds.amazonaws.com';
const dbPort = 3306;
const dbUsername = "kgotwebsite";
const dbPassword = "kgotwebsite";
const dbDatabase = "kgotdatabase";

var pool  = mysql.createPool({
  host      : dbHostName,
  port      : dbPort,
  user     	: dbUsername,
  password 	: dbPassword,
  database 	: dbDatabase
});

exports.getConnection = function(callback, callbackObj)
{
  pool.getConnection(callback);
}