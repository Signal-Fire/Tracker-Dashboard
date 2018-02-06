var express = require('express');
var sesh = require('express-session');
var app = express();

var port = 8080;

/*  Session Handling
*/
app.use(sesh({
    secret: 'wotcha',
    resave: false,
    maxAge: 10000,
    saveUninitialized: true,
    cookie: { secure: false }
}));

/* CSS / Gubbins
*/
app.use(express.static('views'));
app.use(express.static('views'));

/*  Routes
*/
require('./routes/routes')(app);

app.listen(port, function() {
    console.log("Tracker Admin UI running on " +  port);
});
