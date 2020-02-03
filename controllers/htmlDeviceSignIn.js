var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('DeviceSignIn');
	});

    app.post('/SignIn', urlencodedParser, function(req, res){
        res.send('Success Sign In');
        console.log(req.body.DevieName);
        console.log(req.body.SelectTypeList);
    });

}