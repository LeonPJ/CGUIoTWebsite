//進入畫面
function entryload(){
  readIndoor();
  readI();
  readV();
  readP();
  readPF();
  readStatus();
  readControlStatus();
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

//即時智慧插座I
function readI(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("/readi", requestOptions)
    .then(response => response.text())
    .then(result => {
      //console.log(result);
      //var html = new EJS({url: 'views/readperson.ejs'});// 
      document.getElementById("readSmartsocketI").innerHTML = result;
    })// 接收 controllers readperson.js 回傳值

    .catch(error => console.log('error', error));
  
}

//即時智慧插座V
function readV(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("/readv", requestOptions)
    .then(response => response.text())
    .then(result => {
      //console.log(result);
      //var html = new EJS({url: 'views/readperson.ejs'});// 
      document.getElementById("readSmartsocketV").innerHTML = result;
    })// 接收 controllers readperson.js 回傳值

    .catch(error => console.log('error', error));
  
}

//即時智慧插座P
function readP(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("/readp", requestOptions)
    .then(response => response.text())
    .then(result => {
      //console.log(result);
      //var html = new EJS({url: 'views/readperson.ejs'});// 
      document.getElementById("readSmartsocketP").innerHTML = result;
    })// 接收 controllers readperson.js 回傳值

    .catch(error => console.log('error', error));
  
}

//即時智慧插座PF
function readPF(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("/readpf", requestOptions)
    .then(response => response.text())
    .then(result => {
      //console.log(result);
      //var html = new EJS({url: 'views/readperson.ejs'});// 
      document.getElementById("readSmartsocketPF").innerHTML = result;
    })// 接收 controllers readperson.js 回傳值

    .catch(error => console.log('error', error));
  
}

//即時智慧插座STATUS
function readControlStatus(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("/readcontrolstatus", requestOptions)
    .then(response => response.text())
    .then(result => {
      //console.log(result);
      var readSmartsocketSTATUSString = JSON.parse(result);
      if(readSmartsocketSTATUSString == "1"){
        document.getElementById("readSmartsocketControlType").innerHTML = "自動控制模式";
      }else if(readSmartsocketSTATUSString == "0"){
        document.getElementById("readSmartsocketControlType").innerHTML = "手動控制模式";
      }else{
        document.getElementById("readSmartsocketControlType").innerHTML = "ERROR";
      }

      //document.getElementById("readSmartsocketSTATUS").innerHTML = result;
    })// 接收 controllers readperson.js 回傳值

    .catch(error => console.log('error', error));
  
}

//即時智慧插座STATUS
function readStatus(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("/readstatus", requestOptions)
    .then(response => response.text())
    .then(result => {
      //console.log(result);
      var readSmartsocketSTATUSString = JSON.parse(result);
      if(readSmartsocketSTATUSString == "1"){
        document.getElementById("readSmartsocketSTATUS").innerHTML = "開啟";
      }else if(readSmartsocketSTATUSString == "0"){
        document.getElementById("readSmartsocketSTATUS").innerHTML = "關閉";
      }else{
        document.getElementById("readSmartsocketSTATUS").innerHTML = "ERROR";
      }

      //document.getElementById("readSmartsocketSTATUS").innerHTML = result;
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
      drawChart(timestamp, value, arrayJSON[0].sign);
      //document.getElementById("readNumberPersonHistory").innerHTML = result;
    })// 接收 controllers readpersonhistory.js 回傳值
    .catch(error => console.log('error', error));
}

//歷史智慧插座I
function readIHistory(){

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  var timestamp = [];
  var value = [];
  var sign = [];

  fetch("/readihistory", requestOptions)
    .then(response => response.text())
    .then(result => {
      var arrayJSON = JSON.parse(result);
      dataLength = arrayJSON.length;
      for(let i=0; i<dataLength; i++) {// 計算物件內長度
        timestamp[i] = arrayJSON[i].created_at;
        value[i] = arrayJSON[i].value;
        //sign[0] = arrayJSON[0].sign;
      }
      drawChart(timestamp, value, arrayJSON[0].sign);
      //document.getElementById("readNumberPersonHistory").innerHTML = result;
    })// 接收 controllers readpersonhistory.js 回傳值
    .catch(error => console.log('error', error));
}

//歷史智慧插座V
function readVHistory(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  var timestamp = [];
  var value = [];
  var sign = [];

  fetch("/readvhistory", requestOptions)
    .then(response => response.text())
    .then(result => {
      var arrayJSON = JSON.parse(result);
      dataLength = arrayJSON.length;
      for(let i=0; i<dataLength; i++) {// 計算物件內長度
        timestamp[i] = arrayJSON[i].created_at;
        value[i] = arrayJSON[i].value;
        //sign[0] = arrayJSON[0].sign;
      }
      drawChart(timestamp, value, arrayJSON[0].sign);
      //document.getElementById("readNumberPersonHistory").innerHTML = result;
    })// 接收 controllers readpersonhistory.js 回傳值
    .catch(error => console.log('error', error));
}

//歷史智慧插座P
function readPHistory(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  var timestamp = [];
  var value = [];
  var sign = [];

  fetch("/readphistory", requestOptions)
    .then(response => response.text())
    .then(result => {
      var arrayJSON = JSON.parse(result);
      dataLength = arrayJSON.length;
      for(let i=0; i<dataLength; i++) {// 計算物件內長度
        timestamp[i] = arrayJSON[i].created_at;
        value[i] = arrayJSON[i].value;
        //sign[0] = arrayJSON[0].sign;
      }
      drawChart(timestamp, value, arrayJSON[0].sign);
      //document.getElementById("readNumberPersonHistory").innerHTML = result;
    })// 接收 controllers readpersonhistory.js 回傳值
    .catch(error => console.log('error', error));
}

//歷史智慧插座PF
function readPFHistory(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  var timestamp = [];
  var value = [];
  var sign = [];

  fetch("/readpfhistory", requestOptions)
    .then(response => response.text())
    .then(result => {
      var arrayJSON = JSON.parse(result);
      dataLength = arrayJSON.length;
      for(let i=0; i<dataLength; i++) {// 計算物件內長度
        timestamp[i] = arrayJSON[i].created_at;
        value[i] = arrayJSON[i].value;
        //sign[0] = arrayJSON[0].sign;
      }
      drawChart(timestamp, value, arrayJSON[0].sign);
      //document.getElementById("readNumberPersonHistory").innerHTML = result;
    })// 接收 controllers readpersonhistory.js 回傳值
    .catch(error => console.log('error', error));
}

//製圖 歷史圖片
function drawChart(timestamp, value, sign){
  var ctx = document.getElementById('drawchart').getContext('2d');
  var chart = new Chart(ctx, {
    type:'line',
    data:{
      labels: timestamp,
      datasets:[{
        label: sign,// 圖名稱
        lineTension: 0, //曲線的彎曲
        borderWith: 0,// 線條圖邊線寬
        borderColor: 'rgba(0, 0, 225)',// 線條圖邊線顏色
        backgroundColor: 'rgba(0, 0, 225)',// 線條圖背景色
        fill: false,// 是否填滿色彩
        data: value
      }]
    },
    options:{
      scales: {
        xAxes: [{
          display: true
         }],
        yAxes: [{
          display: true
        }]
      }
    }
  });
}
