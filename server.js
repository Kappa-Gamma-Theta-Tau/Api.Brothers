var express 		= require('express');
var bodyParser 	= require('body-parser');
var morgan 			= require('morgan');
var config 			= require('./api/config');

var app = express();


// configure app
app.use(morgan('dev'));

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/brotherRoutes');



routes(app);

app.listen(config.port);

console.log('kgotweb server started on: ' + config.port);