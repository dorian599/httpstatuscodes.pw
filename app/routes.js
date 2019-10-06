var express = require('express');
var path    = require('path');

var router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  var content1 = "Simple an easy to use utility for generating different HTTP Status Codes for test your apps, scripts, web servers or whatever you want.";

  var content2 = "It's simple, just add the HTTP Status Code you want to test in the URL like this:";

  var content3 = "This is a list of the most common HTTP Status Codes and supported by this utility. If you know about another code just drop me a mail at ";

  var httpStatusCodes = [
    { code: 200, column: 'L', description: 'OK' },
    { code: 201, column: 'M', description: 'Created' },
    { code: 202, column: 'R', description: 'Accepted' },
    { code: 203, column: 'L', description: 'Non-Authoritative Information' },
    { code: 204, column: 'M', description: 'No Content' },
    { code: 205, column: 'R', description: 'Reset Content' },
    { code: 206, column: 'L', description: 'Partial Content' },
    { code: 300, column: 'M', description: 'Multiple Choices' },
    { code: 301, column: 'R', description: 'Moved Permanently' },
    { code: 302, column: 'L', description: 'Found' },
    { code: 303, column: 'M', description: 'See Other' },
    { code: 304, column: 'R', description: 'Not Modified' },
    { code: 305, column: 'L', description: 'Use Proxy' },
    { code: 306, column: 'M', description: 'Unused' },
    { code: 307, column: 'R', description: 'Temporary Redirect' },
    { code: 308, column: 'L', description: 'Permanent Redirect' },
    { code: 400, column: 'M', description: 'Bad Request' },
    { code: 401, column: 'R', description: 'Unauthorized' },
    { code: 402, column: 'L', description: 'Payment Required' },
    { code: 403, column: 'M', description: 'Forbidden' },
    { code: 404, column: 'R', description: 'Not Found' },
    { code: 405, column: 'L', description: 'Method Not Allowed' },
    { code: 406, column: 'M', description: 'Not Acceptable' },
    { code: 407, column: 'R', description: 'Proxy Authentication Required' },
    { code: 408, column: 'L', description: 'Request Timeout' },
    { code: 409, column: 'M', description: 'Conflict' },
    { code: 410, column: 'R', description: 'Gone' },
    { code: 411, column: 'L', description: 'Length Required' },
    { code: 412, column: 'M', description: 'Precondition Failed' },
    { code: 413, column: 'R', description: 'Request Entry Too Large' },
    { code: 414, column: 'L', description: 'Request-URI Too Long' },
    { code: 415, column: 'M', description: 'Unsupported Media Type' },
    { code: 416, column: 'R', description: 'Requested Range Not Satisfiable' },
    { code: 417, column: 'L', description: 'Expectation Failed' },
    { code: 422, column: 'M', description: 'Unprocessable Entity' },
    { code: 428, column: 'R', description: 'Precondition Required' },
    { code: 429, column: 'L', description: 'Too Many Requests' },
    { code: 431, column: 'M', description: 'Request Header Fields Too Large' },
    { code: 451, column: 'R', description: 'Unavailable For Legal Reasons' },
    { code: 500, column: 'L', description: 'Internal Server Error' },
    { code: 501, column: 'M', description: 'Not Implemented' },
    { code: 502, column: 'R', description: 'Bad Gateway' },
    { code: 503, column: 'L', description: 'Service Unavailable' },
    { code: 504, column: 'M', description: 'Gateway Timeout' },
    { code: 505, column: 'R', description: 'HTTP Version Not Supported' },
    { code: 511, column: 'L', description: 'Network Authentication Required' },
    { code: 520, column: 'M', description: 'Web server is returning an unknown error' },
    { code: 522, column: 'R', description: 'Connection timed out' },
    { code: 524, column: 'L', description: 'A timeout occurred' },
    { code: 100, column: 'M', description: 'Continue' },
    { code: 101, column: 'R', description: 'Switching Protocols' },
    { code: 102, column: 'L', description: 'Processing' }
  ];
  res.render('pages/index',
  {
    httpStatusCodes: httpStatusCodes,
    content1: content1,
    content2: content2,
    content3: content3
  });
});

// router.get('/code/:codeID', function(req, res) {
//   var code = req.params.codeID ;
//   res.statusCode=code;
//   res.json({ message: 'HTTP Status Code', code: code });
// });

router.post('/code/:codeID', function(req, res) {
  var code = req.params.codeID ;
  res.statusCode=code;
  res.json({ message: 'HTTP Status Code', code: code });
});

// router.get('/about', function(req, res) {
//   res.render('pages/about');
// });
