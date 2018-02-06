var express = require('express');
var session = require('express-session');
var app = express();

/*  Templates
*/
app.use(express.static('views'));
app.use(express.static('views'));

var indextemplate = require('pug').compileFile(__dirname + '/views/index.pug'),
    logintemplate = require('pug').compileFile(__dirname + '/views/login.pug');

/*  Session Handling
*/

app.use(session({
    secret: 'wotcha',
    resave: false,

}));
var port = 8080;

app.get('/', function(req, res, next) {
    res.send(indextemplate({ title: 'Homepage' }));
});

app.get('/login', function(req, res, next) {
    res.send(logintemplate({ title: 'Login' }));
});

app.listen(port, function() {
    console.log("Tracker Admin UI running on " +  port);
});
