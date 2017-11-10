var express        = require('express');
var bodyParser     = require('body-parser');
var app            = express();
var port    = process.env.PORT || 3000;

// Use ejs
app.set('view engine', 'ejs');

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// App Routes
var router = require('./app/routes');
app.use('/', router);

// Static Files
app.use(express.static(__dirname + '/public'));

// Server Start
app.listen(port, function () {
  console.log('Http Codes Status STARTED '+Date());
});
