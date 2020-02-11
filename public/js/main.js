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

  //console.log("ready to convert obj to string");
  var TYPE = SelectType.toString();//將物件轉為字串

  switch(TYPE) {
    case "Socket":
      console.log("this is Socket");
      break;
    case "Environment":
      console.log("this is Environment");
      break;
    case "Light":
      console.log("this is Light");
      break;
    case "IRBody":
      console.log("this is IRBody");
      break;
    case "DoorCount":
      console.log("this is DoorCount");
      break;
    default:
      console.log("cant find type");
  }

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