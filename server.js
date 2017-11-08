var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var port    = process.env.PORT || 3000;

// Use ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

// App Routes
var router = require('./app/routes');
app.use('/', router);

// Static Files
app.use(express.static(__dirname + '/public'));

// Server Start
app.listen(port, function () {
  console.log('Http Codes Status STARTED');
});
