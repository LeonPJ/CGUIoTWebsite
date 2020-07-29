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
    .then(result => {console.log(result)
      //var html = new EJS({url: 'views/readperson.ejs'});// 
      $("#readNumberPerson").html(result);// index.js
    })// 接收 controllers readperson.js 回傳值

    .catch(error => console.log('error', error));
  
}