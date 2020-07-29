var request = require('request');
//新稱裝置基本資料
module.exports = function(addinf, type){
    console.log(addinf);
    console.log(type);
    /*var options = {
        'method': 'POST',
        'url': 'http://120.126.8.126/api/device_info?api_token=60kSeSf78sXjr0W9AtZoxMC9vIj1gzZP8GcdtHtTIaELm7PteocrYzBgjFVD',
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
          'device_serial_number': addinf,
          'parent': '1',
          'category': 'controller',
          'description': 'Count  people',
          'input_distance': '5',
          'output_distance': '4095',
          'version': '1.0.0',
          'status': '0',
          'measure_item': '電壓|電流|功率|功率因數',
          'measure_unit': 'V|I|W|P.P.'
        }
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
      });*/

}