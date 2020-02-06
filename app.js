var express = require('express');
var app = express();

var CreateDevice= require('./controllers/create');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
    //console.log('Require url: ' + req.url);
    next();
});

CreateDevice(app);

app.listen(port);
