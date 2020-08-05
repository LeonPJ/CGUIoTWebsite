//進入畫面
function entryload(){
  readIndoor();
}


//即時室內人數
function readIndoor(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("/readperson", requestOptions)
    .then(response => response.text())
    .then(result => {
      //console.log(result);
      //var html = new EJS({url: 'views/readperson.ejs'});// 
      document.getElementById("readNumberPerson").innerHTML = result;
    })// 接收 controllers readperson.js 回傳值

    .catch(error => console.log('error', error));
  
}

//歷史室內人數
function readIndoorHistory(){

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  var timestamp = [];
  var value = [];

  fetch("/readpersonhistory", requestOptions)
    .then(response => response.text())
    .then(result => {
      var arrayJSON = JSON.parse(result);
      dataLength = arrayJSON.length;
      for(let i=0; i<dataLength; i++) {// 計算物件內長度
        timestamp[i] = arrayJSON[i].created_at;
        value[i] = arrayJSON[i].value;
      }
      drawPersonChart(timestamp, value);
      /*var ctx = document.getElementById('chart').getContext('2d');
      var chart = new Chart(ctx, {
        type:'line',
        data:{
          labels: timestamp,
          datasets:[{
            label: '人數',
            borderColor:'rgb(255, 99, 132)',
            data: value
          }]
        },
        options:{}
      });*/
      //document.getElementById("readNumberPersonHistory").innerHTML = result;
    })// 接收 controllers readpersonhistory.js 回傳值
    .catch(error => console.log('error', error));
}

//製圖 歷史室內人數
function drawPersonChart(timestamp, value){
  var ctx = document.getElementById('chart').getContext('2d');
  var chart = new Chart(ctx, {
    type:'line',
    data:{
      labels: timestamp,
      datasets:[{
        label: '歷史室內人數',// 圖名稱
        lineTension:0, //曲線的彎曲
        borderWith: 0,// 線條圖邊線寬
        borderColor: 'rgba(54, 162, 235, 0.5)',// 線條圖邊線顏色
        backgroundColor: 'rgba(54, 162, 235, 0.5)',// 線條圖背景色
        fill: false,// 是否填滿色彩
        data: value
      }]
    },
    options:{
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
      }
    }
  });
}