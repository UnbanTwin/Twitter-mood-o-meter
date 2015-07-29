////////////////////////
//      Twemotion     //
//       client       //
//     for foc2015    //
////////////////////////


var data = ""
var oReq = new XMLHttpRequest();
var colors = ["#FFB300", "#1DE9B6", "#B71C1C", "#00B8D4"];
//             Joy,       Suprise,   Anger,     Sad
oReq.open("get", "out.txt", true);
oReq.send();
oReq.onload = function () {
    data  = oReq.responseText;
    data = data.replace("\n", "");
    console.log(oReq.responseText)
    out = data.split(" ")
    console.log(out)
    var bestEmotion = Math.max.apply( Math, out );
    console.log(bestEmotion);
    

}
