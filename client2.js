// Emotion vardefs
var joy;
var suprise;
var anger;
var sadness;
// asthetic settings
var colors = ["#FFB300", "#1DE9B6", "#B71C1C", "#00B8D4"];
// directories
var datadir = "data/"
// Function to be called after all XMLHttpRequests have completed
var carryOn = function () {
  var emotions = [joy, suprise, anger, sadness];
  var highest = Math.max.apply( Math, emotions );
  console.log(emotions);
  console.log(highest);
  console.log(emotions.indexOf(highest));
  var x = emotions.indexOf(highest);
  var bgcolor = colors[x];
  console.log(bgcolor);
  $("body").css('background-color', bgcolor);
}
//["#FFB300", "#1DE9B6", "#B71C1C", "#00B8D4"];


// read data from the data directories
var oReq = new XMLHttpRequest();
oReq.open("get", datadir + "happy.txt", true);
oReq.send();
oReq.onload = function () {
    joy = parseInt(oReq.responseText);
    console.log(joy);
    var oReq2 = new XMLHttpRequest();
    oReq2.open("get", datadir + "suprised.txt", true);
    oReq2.send();
    oReq2.onload = function () {
        suprise = parseInt(oReq2.responseText);
        console.log(suprise);
        var oReq3 = new XMLHttpRequest();
        oReq3.open("get", datadir + "anger.txt", true);
        oReq3.send();
        oReq3.onload = function () {
            anger = parseInt(oReq3.responseText);
            console.log(anger);
            var oReq4 = new XMLHttpRequest();
            oReq4.open("get", datadir + "sad.txt", true);
            oReq4.send();
            oReq4.onload = function () {
                sadness = parseInt(oReq4.responseText);
                console.log(sadness);
                carryOn();
            }

        }
    }
};


$( ".navbar" ).hover(function() {
    $(this).show();

});
