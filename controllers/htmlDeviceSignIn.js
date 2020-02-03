var request = require('request');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('DeviceSignIn');
	});

    app.post('/SignIn', urlencodedParser, function(req, res){
        var options = {
            'method': 'POST',
            'url': 'http://120.126.8.126/api/device?api_token=60kSeSf78sXjr0W9AtZoxMC9vIj1gzZP8GcdtHtTIaELm7PteocrYzBgjFVD',
            'headers': {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
              'name': req.body.DevieName,
              'mac_address': req.body.DevieMAC,
              'ip_address': req.body.DevieIP
            }
          };
          request(options, function (error, response) { 
            if (error) throw new Error(error);
            console.log(JSON.parse(response.body).message);//將JSON字串解析成JavaScript物件
            console.log(JSON.parse(response.body).data);
            res.send(JSON.parse(response.body).message);

          });
        /*console.log(req.body.DevieIP);
        console.log(req.body.DevieMAC);
        console.log(req.body.DevieName);
        console.log(req.body.SelectTypeList);*/
                    
    });

}