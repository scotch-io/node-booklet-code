// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    instagram = require('instagram-node').instagram(),
    port = process.env.PORT || 8080;

// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure body-parser which lets us grab POST data
// parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

// configure instagram app with client-id
instagram.use({ 
    client_id: 'e0e51c60672c4f09abe28c46c71a3a7a',
    client_secret: 'db11c575a8ae4f1aa90a03ba1d1345d8' 
});

// SET THE ROUTES
// ===================================================
// get user info
app.post('/users/:username', function(req, res) {

    // use the instagram package to get popular media
    instagram.media_popular(function(err, medias, remaining, limit) {
        // render the user page and pass in the users images
        res.render('pages/user', { grams: medias });
    });

});

// home page route - popular images
app.get('/', function(req, res) {

    // use the instagram package to get popular media
    instagram.media_popular(function(err, medias, remaining, limit) {
        // render the home page and pass in the popular images
        res.render('pages/index', { grams: medias });
    });

});

// START THE SERVER
// ==================================================
app.listen(port);
console.log('App started! Look at http://localhost:' + port);