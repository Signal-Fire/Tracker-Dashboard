/*jshint esversion: 6*/
var config = require('../config/configuration');
var request = require('request');

class Requester {
    constructor() {
        
    }

    PerformLogin(user, pass) {
        return new Promise(function(resolve, reject) {
            var formData = {
                email: user,
                password: pass
            };
            request.post({url: config.api_url + '/auth/adminlogin', body: formData, json: true}, function optCallback(err, httpResponse, body) {
                var responseCode = httpResponse.statusCode;

                if (err || (responseCode < 200 || responseCode > 210))
                    reject("Invalid Request");
                
                resolve(body);
            });
        });
    }
}

module.exports = Requester;