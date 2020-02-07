$(document).ready(function(){
    $("form#Create").on('submit', function(e){
        e.preventDefault();
        //var data = $('input[name=DevieIP]').val();
        /*console.log($('input[name=DevieIP]').val());
        console.log($('input[name=DevieMAC]').val());
        console.log($('input[name=DevieName]').val());*/

        var settings = {
            "url": "/Create",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
              "name": $('input[name=DevieName]').val(),
              "mac_address": $('input[name=DevieMAC]').val(),
              "ip_address": $('input[name=DevieIP]').val()
            }
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });

      //  $.ajax({
          //  type: 'post',
         //   url: '/ajax',
        //    data: data,
        //    dataType: 'text'
       // })
        //.done(function(data){
        //    $('h1').html(data.quote);
        //});
    });
});

/*

function create(){
    var DevieIP = document.getElementById('DevieIP').value;
    var DevieMAC = document.getElementById('DevieMAC').value;
    var DevieName = document.getElementById('DevieName').value;
    var SelectType = document.getElementById('SelectType').value;

    console.log(DevieIP);
    console.log(DevieMAC);
    console.log(DevieName);
    console.log(SelectType);

    var data = "name=" + DevieName + "&mac_address=" + DevieMAC + "&ip_address=" + DevieIP;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
        console.log(this.responseText);
    }
    
});

xhr.open("POST", "http://120.126.8.126/api/device?api_token=60kSeSf78sXjr0W9AtZoxMC9vIj1gzZP8GcdtHtTIaELm7PteocrYzBgjFVD", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);


}
*/