var indextemplate = require('pug').compileFile('./views/index.pug'),
    logintemplate = require('pug').compileFile('./views/login.pug');

var requester = require('../requests/requester');
var Requests = new requester();

module.exports = function(app) {
    app.get('/', function(req, res, next) {    
        if (req.session.loggedIn) {
            var returnResult = Requests.GetPositions();
            var deviceList = Requests.GetDevices();

            Promise.all([returnResult, deviceList]).then(function(result) {
                var positions = result[0].slice(1, 4);
                res.send(indextemplate({ title: 'Homepage', positions: positions, posList: result[1] }));
            }).catch(function(err) {
                console.log('Error');
            });
            Requests.GetPositions()
            .then(function(result) {
                
                var deviceList = Requests.GetDevices();
                
            }).catch(function(err) {
                //do nothing
            });            
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

    app.post('/registerdevice', function(req, res, next) {
        if (!req.session.loggedIn) 
            res.redirect('/login');        

        Requests.RegisterDevice(req.body.email)
            .then(function(result) {
                res.redirect('/');
            }).catch(function(err) {
                //do nothing
            });
    });

    app.get('/download/:id', function(req, res, next) {
        if (!req.session.loggedIn)
            res.redirect('/login');
        
        Requests.GetPositionsFromId(req.params.id).then(function(result) {
            res.send(result);
        }).catch(function(err) {
            console.log(err);
        });
    });
};