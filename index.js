var express = require('express');
var app = express();

/*  Templates
*/
var indextemplate = require('pug').compileFile(__dirname + '/views/index.pug');

var port = 8080;

app.get('/', function(req, res, next) {
    res.send(indextemplate({ title: 'Homepage' }));
});

app.listen(port, function() {
    console.log("Tracker Admin UI running on " +  port);
});
