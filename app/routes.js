var express = require('express');
var path    = require('path');

var router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.render('pages/index');
});

router.get('/about', function(req, res) {
  res.render('pages/about');
});
