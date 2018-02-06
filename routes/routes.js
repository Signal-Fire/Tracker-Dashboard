
var indextemplate = require('pug').compileFile('../views/index.pug'),
    logintemplate = require('pug').compileFile('../views/login.pug');

module.exports = function(app) {
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
};