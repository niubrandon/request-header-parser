//npm init //to create package.json
// npm install --save express&body-parser&cors
//express-useragents
//require import for Node.js
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');
//Create an instance of express
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());
//API URL
var api = '/api/whoami';
//express get URL
app.get(api, function(req, res, next){
  var language = req.acceptsLanguages();
  //var software = req.get('User-Agent');
  //use npm
  var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
  //req.headers['User-Agent']; same way of getting data for software
  var ipaddress = req.ip;

  res.json({'ipaddress':ipaddress,'language': language[0],'software': software});

});


app.listen(3000, function(){
  console.log("Working");
});
