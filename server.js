var req = require('require-yml');

var express 		= require('express');
var bodyParser 	= require('body-parser');
var morgan 			= require('morgan');
var config 			= require('./api/config');
var swagger			= require('swagger-ui-express'),
	swaggerDocument	= req('./api-docs/v1');

var app = express();


// configure app
app.use(morgan('dev'));

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure swaggger
app.use('/swagger', swagger.serve, swagger.setup(swaggerDocument));

// allow access using access-control-allow-origin header
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var routes = require('./api/routes/brotherRoutes');
routes(app);



app.listen(config.port);
console.log('kgotweb server started on: ' + config.port);