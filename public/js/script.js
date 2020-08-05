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
      show(timestamp, value);

      //document.getElementById("readNumberPersonHistory").innerHTML = result;
    })// 接收 controllers readpersonhistory.js 回傳值
    .catch(error => console.log('error', error));

}

function show(timestamp, value){
  //console.log(timestamp);
  //console.log(value);
  var lineChartData = {
    labels: [timestamp], //顯示區間名稱
    datasets: [{
        label: '未曾使用', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#ea464d",
        borderColor: "#ea464d",
        borderWidth: 5,
        data: [value], // 資料
        fill: false, // 是否填滿色彩
    }]
  };
  var ctx = document.getElementById("canvas").getContext("2d");
  drawLineCanvas(ctx,lineChartData);
}
  function drawLineCanvas(ctx,data) {
    window.myLine = new Chart(ctx, {  //先建立一個 chart
        type: 'line', // 型態
        data: data,
        options: {
                responsive: true,
                legend: { //是否要顯示圖示
                    display: true,
                },
                tooltips: { //是否要顯示 tooltip
                    enabled: true
                },
                scales: {  //是否要顯示 x、y 軸
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }]
                },
            }
    });
};
