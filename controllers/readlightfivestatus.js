var request = require('request');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(req, res, next) {//HTTP請求
    var options = {
        'method': 'GET',
        'url': 'http://120.126.8.126/api/switch/97bcc2a2-b69b-45ad-ad28-0df9d444059b?api_token=60kSeSf78sXjr0W9AtZoxMC9vIj1gzZP8GcdtHtTIaELm7PteocrYzBgjFVD',
        'headers': {
          'Accept': 'application/json',
          'Authorization': 'njkfjsdnfjksjn43940394093nfdbh',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
      
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        let message = JSON.parse(response.body);// JSON字串轉成物件
        //console.log(message.data.status);
        res.status(200).json(message.data.status);// 回傳STATUS狀態
      });
}