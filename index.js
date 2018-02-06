var express = require('express');
var sesh = require('express-session');
var app = express();

var port = 8080;

/*  Templates
*/
app.use(express.static('views'));
app.use(express.static('views'));

var indextemplate = require('pug').compileFile(__dirname + '/views/index.pug'),
    logintemplate = require('pug').compileFile(__dirname + '/views/login.pug');

/*  Session Handling
*/
app.use(sesh({
    secret: 'wotcha',
    resave: false,
    maxAge: 10000,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/', function(req, res, next) {    
    if (req.session.loggedIn) {
        res.send(indextemplate({ title: 'Homepage' }));
    } else {
        res.send(logintemplate({ title: 'Login' }));
    }
    req.session.errors = null;
});

app.get('/login', function(req, res, next) {
    if (req.session.loggedIn) {
        res.send(indextemplate( { title: 'Homepage' }));
    } else {
        res.send(logintemplate({ title: 'Login' }));        
    }
    req.session.errors = null;
});

app.listen(port, function() {
    console.log("Tracker Admin UI running on " +  port);
});
