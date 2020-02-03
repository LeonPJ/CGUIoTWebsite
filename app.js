var express = require('express');
var app = express();

var htmlController= require('./controllers/htmlDeviceSignIn');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
    //console.log('Require url: ' + req.url);
    next();
});

htmlController(app);

app.listen(port);
