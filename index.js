var express = require('express');
var sesh = require('express-session');
var bodyParser = require('body-parser');

var app = express();

var port = 8080;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.locals.moment = require('moment');

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

/* Listen
*/
app.listen(port, function() {
    console.log("Tracker Admin UI running on " +  port);
});
