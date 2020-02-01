var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('DeviceSignIn');
});

app.listen(port);
