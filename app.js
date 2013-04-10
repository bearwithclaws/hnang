var express = require('express'),
  sass = require('node-sass'),
  moment = require('moment'),
  url = require('util'),
  rest = require('restler');

var app = express();

app.configure(function() {
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(sass.middleware({ src: __dirname + '/public', dest: __dirname + '/public', debug: true }));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('nang nang'));
  app.use(express.session());
});

app.get('/', function(req, res) {
  res.render('index');
});

// Server

var port = process.env.PORT || 7070;

app.listen(port, function() {
  console.log("Listening on " + port);
});