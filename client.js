////////////////////////
//      Twemotion     //
//       client       //
//     for foc2015    //
////////////////////////
var data = ""
var oReq = new XMLHttpRequest();
oReq.open("get", "out.txt", true);
oReq.send();
oReq.onload = function () {
    data  = oReq.responseText;
    data = data.replace("\n", "");
    console.log(oReq.responseText)
    out = data.split(" ")
    console.log(out)
    for(var i=0; i < out.length; i++) {
      console.log(i)
    }
}
