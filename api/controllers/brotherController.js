var brother = require('../models/brother');
var mysql = require('mysql');

var pool = require('../connectionPool')
var controllerMethods = require('./controllerMethods');

exports.list_active_brothers = function(req, res) {
	controllerMethods.query(
    "select * from Brothers where active = 1",
    null,
    (result) => { res.send(result); }
  );
}

exports.list_all_brothers = function(req, res) {
	controllerMethods.query(
    "select * from Brothers",
    null,
    (result) => { res.send(result); }
  );
}

exports.create_a_brother = function(req, res) {
	res.send('create_a_brother');
}

exports.read_a_brother = function(req, res) {
  console.log('hello');
  console.log(req.params.roll);
  controllerMethods.query(
    "select * from Brothers where roll = ?",
    [req.params.roll],
    (result) => { res.send(result); }
  );
}

exports.update_a_brother = function(req, res) {
	res.send('update_a_brother');	
}

exports.delete_a_brother = function(req, res) {
	res.send('delete_a_brother');
}

/*
queryDatabase = function(sql) {
	pool.getConnection(function(err, connection) {
    if(err) { 
      console.log(err); 
      callback(true); 
      return; 
    }
    var sql = "select * from Brothers where active = 1";
    connection.query(sql, [], function(err, result) {
      connection.release(); // always put connection back in pool after last query
      if(err) { 
        console.log(err);  
        return; 
      }
      res.send(result);
    });
}*/