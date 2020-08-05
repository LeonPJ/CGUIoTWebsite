var request = require('request');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(req, res, next) {//HTTP請求
    var options = {
        'method': 'GET',
        'url': 'http://120.126.8.126/api/record/80a8b60f-739e-4b89-99c2-dafe21bdd89a?api_token=60kSeSf78sXjr0W9AtZoxMC9vIj1gzZP8GcdtHtTIaELm7PteocrYzBgjFVD',
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);        
        let message = JSON.parse(response.body);// JSON字串轉成物件
        //console.log(response.body);
        dataLength = message.data.length;
        for(let i=0; i<dataLength; i++) {// 計算物件內長度
            Object.keys(message.data[i]).length;
            var dataNumber = i;// 計算出長度後儲存成變數
        }
        //console.log(message.data[dataNumber].value);// 利用儲存變數顯示最新資料
        res.status(200).json(message.data);// 取得所有 JSON 資料
        //res.send(message.data);
      });
}
