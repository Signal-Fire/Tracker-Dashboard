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

    GetPositionsFromId(deviceId) {
        return new Promise(function(resolve, reject) {
            request.get({url: config.api_url + '/find/position/' + deviceId, json: true}, function optCallback(err, httpResponse, body) {
                var responseCode = httpResponse.statusCode;

                if (err || (responseCode < 200 || responseCode > 210)) 
                    reject("Invalid Request")
                    
                resolve(body);
            });
        });
    }

    GetPositions() {
        return new Promise(function(resolve, reject) {
            request.get({url: config.api_url + '/find/all', json: true}, function optCallback(err, httpResponse, body) {
                var responseCode = httpResponse.statusCode;
                
                if (err || (responseCode < 200 || responseCode > 210)) 
                    reject("Invalid Request");

                resolve(body);                
            });
        });
    }

    GetDevices() {
        return new Promise(function(resolve, reject) {
            request.get({url: config.api_url + '/find/device/all', json: true}, function opCallback(err, httpResponse, body) {
                var responseCode = httpResponse.statusCode;

                if (err || responseCode < 200 || responseCode > 210)
                    reject("Invalid Request");
                
                resolve(body);
            });
        });
    }

    RegisterDevice(email) {
        return new Promise(function(resolve, reject) {
            var formData = {
                email: email
            };
            request.post({url: config.api_url + '/insert/device', body: formData, json: true}, function optCallback(err, httpResponse, body) {
                var responseCode = httpResponse.statusCode;

                if (err || (responseCode < 200 || responseCode > 210)) 
                    reject("Invalid Request");
                
                resolve(httpResponse.statusCode);
            });
        });
    }
}

module.exports = Requester;