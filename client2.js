
// Emotion vardefs
var joy;
var suprise;
var anger;
var sadness;
// directories
var datadir = "data/"
// read data from the data directories
var oReq = new XMLHttpRequest();
oReq.open("get", datadir + "happy.txt", true);
oReq.send();
oReq.onload = function () {
    joy = oReq.responseText;
    console.log(joy);
}
var oReq2 = new XMLHttpRequest();
oReq2.open("get", datadir + "suprised.txt", true);
oReq2.send();
oReq2.onload = function () {
    suprise = oReq2.responseText;
    console.log(suprise);
}
var oReq3 = new XMLHttpRequest();
oReq3.open("get", datadir + "anger.txt", true);
oReq3.send();
oReq3.onload = function () {
    anger = oReq3.responseText;
    console.log(anger);
}
var oReq4 = new XMLHttpRequest();
oReq4.open("get", datadir + "sad.txt", true);
oReq4.send();
oReq4.onload = function () {
    sadness = oReq4.responseText;
    console.log(sadness);
}
console.log("After the file calls");
