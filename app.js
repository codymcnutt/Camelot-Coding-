// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var controller = require('./controllers/controller.js');
mongoose.connect('mongodb://localhost/camelot');

// Auth Requires
// var session = require('express-session');

// Create Express App Object \\
var app = express();


// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
// var controller = require('./controllers/controller')

app.get('/', function(req, res){
  res.sendFile("/html/splash.html", {root : './public'})

});

app.get('/home', function(req, res){
  res.sendFile("/html/home.html", {root : './public'})
});
app.get('/about', function(req, res){
  res.sendFile("/html/about.html", {root : './public'})
});
app.get('/contact', function(req, res){
  res.sendFile("/html/contact.html", {root : './public'})
});
app.get('/projects', function(req, res){
  res.sendFile("/html/projects.html", {root : './public'})
});
app.get('/team', function(req, res){
  res.sendFile("/html/team.html", {root : './public'})
});
app.get('/terms', function(req, res){
  res.sendFile("/html/team.html", {root : './public'})
});



// app.post('/api/savedWishes', controller.createWish)

// app.get('/api/getWishes', controller.getWishes)
 

// var authenticationController = require('./controllers/authentication');


// TURN THIS ON TO USE AUTHENTICATION &&&&&&&&** ***************************************
// app.use(passportConfig.ensureAuthenticated);

// app.get('/', function(req, res){
//   res.sendFile("/html/home.html", {root : './public'})
// });


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})