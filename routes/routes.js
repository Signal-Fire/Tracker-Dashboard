
var indextemplate = require('pug').compileFile('./views/index.pug'),
    logintemplate = require('pug').compileFile('./views/login.pug');

var requester = require('../requests/requester');
var Requests = new requester();

module.exports = function(app) {
    app.get('/', function(req, res, next) {    
        if (req.session.loggedIn) {
            res.send(indextemplate({ title: 'Homepage' }));
        } else {
            res.redirect('/login');
        }
        req.session.errors = null;
    });
    
    app.get('/login', function(req, res, next) {
        if (req.session.loggedIn) {
            res.redirect('/');
        } else {
            res.send(logintemplate({ title: 'Login' }));        
        }
        req.session.errors = null;
    }); 
    
    app.post('/dologin', function(req, res, next) {       
        Requests.PerformLogin(req.body.email, req.body.password)
        .then(function(result) {
            req.session.loggedIn = result.token;
            res.redirect('/');
        }).catch(function (error) {
            res.redirect('/login');
        });
    });

    app.get('/logout', function(req, res, next) {
        req.session.loggedIn = null;
        res.redirect('/login');
    });

    app.get('/recentdevices', function(req, res, next) {

    });
};