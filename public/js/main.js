/*$(document).ready(function(){
    $("form#Create").on('submit', function(e){
        e.preventDefault();
        var DevieIP = $('input[name=DevieIP]').val();
        var DevieMAC = $('input[name=DevieMAC]').val();
        var DevieName = $('input[name=DevieName]').val();
        var SelectType = $('select[name=SelectType]').val();

        var settings = {
            "url": "/Create",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
              "DevieName": DevieName,
              "DevieMAC": DevieMAC,
              "DevieIP": DevieIP,
              "SelectType": SelectType
            }
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });*/

        /*$.ajax({
            type: 'post',
            url: '/ajax',
            data: data,
            dataType: 'text'
        })
            .done(function(data){
                $('h1').html(data.quote);
            });*/
    /*});
});*/


function create(){
  var DevieIP = document.getElementById('DevieIP').value;
  var DevieMAC = document.getElementById('DevieMAC').value;
  var DevieName = document.getElementById('DevieName').value;
  var SelectType = document.getElementById('SelectType').value;

  /*console.log(DevieIP);
  console.log(DevieMAC);
  console.log(DevieName);
  console.log(SelectType);*/

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("DevieIP", DevieIP);
  urlencoded.append("DevieMAC", DevieMAC);
  urlencoded.append("DevieName", DevieName);
  urlencoded.append("SelectType", SelectType);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("/Create", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}