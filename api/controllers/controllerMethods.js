var pool = require('../connectionPool')

exports.query = function(sqlQuery, queryParams, callbackIfSuccess) {

	if(typeof sqlQuery !== 'string') {
		console.log('ERROR:CONTROLLERMETHODS: sql query was not of type string');
		return;
	}
	if(typeof callbackIfSuccess !== 'function') {
		console.log('ERROR:CONTROLLERMETHODS: sql query was not of type function');
		return;
	}
	if(typeof queryParams === 'undefined') {
		queryParams = [];
	}

	pool.getConnection(function(err, connection) {
    if(err) { 
      console.log(err);  
      return; 
    }
    return connection.query(sqlQuery, queryParams, function(err, result) {
      connection.release(); // always put connection back in pool after last query
      if(err) { 
        console.log(err);  
        return; 
      }
      callbackIfSuccess(result);
    });

  });

}