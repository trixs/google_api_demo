var express = require('express')
  , logger = require('morgan')
  , app = express()
  , os = require('os')
var bodyParser = require('body-parser');
var request = require('request');
var request_debug = require('request-debug')(request);

//  , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')

app.use(logger('dev'))
app.use(express.static(__dirname))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
  });

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(process.env.PORT || 3000, function () {
  server  = require('http').createServer(app);
  console.log(os.hostname());
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})