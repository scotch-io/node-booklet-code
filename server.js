// GRAB THE PACKAGES/VARIABLES WE NEED
// =========================
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    instagram = require('instagram-node').instagram(),
    path = require('path'),
    port = process.env.PORT || 8080;

// CONFIGURE THE APP
// =========================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure body-parser
// lets us grab POST data
// -------------------------
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// SET THE ROUTES
// ==========================
app.get('/', function(req, res) {
    res.render('index');
});

// START THE SERVER
// =========================
app.listen(port);
console.log('App started! Look at http://localhost:' + port);