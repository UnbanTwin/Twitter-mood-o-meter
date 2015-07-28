////////////////////////
//      Twemotion     //
//       client       //
//     for foc2015    //
////////////////////////
var oReq = new XMLHttpRequest();
oReq.open("get", "out.txt", true);
oReq.send();
console.log(oReq.response)
