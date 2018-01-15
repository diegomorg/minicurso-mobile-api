var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Clifor = require('./api/models/cliforModel'),
	bodyParser = require('body-parser');

// mongoose instance connection url connection
var MONGO_DB = 'mongodb://minicursomobile:pfK6FBSpXvhh5otl@minicursomobile-shard-00-00-kfmuy.mongodb.net:27017,minicursomobile-shard-00-01-kfmuy.mongodb.net:27017,minicursomobile-shard-00-02-kfmuy.mongodb.net:27017/test?ssl=true&replicaSet=minicursomobile-shard-0&authSource=admin';
mongoose.connect(MONGO_DB, { useMongoClient: true });
mongoose.Promise = global.Promise;

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
var routes = require('./api/routes/cliforRoutes');
routes(app);

// default redirect to 'not found'
app.use(function (req, res) {
	res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('RESTful API server started on: ' + port);