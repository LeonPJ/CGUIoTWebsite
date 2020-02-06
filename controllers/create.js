var request = require('request');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(req, res) {//HTTP請求
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
    let ReturnMessage = JSON.parse(response.body);//將JSON字串解析成JavaScript物件
    console.log(ReturnMessage.message);
    console.log(ReturnMessage.data);
    res.send(ReturnMessage.message);
  });
  //console.log(req.body.DevieIP);
  //console.log(req.body.DevieMAC);
  //console.log(req.body.DevieName);
  //console.log(req.body.SelectTypeList);
}