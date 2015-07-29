// Emotion vardefs
var joy;
var suprise;
var anger;
var sadness;
// directories
var datadir = "data/"
// read data from the data directories#var data = ""
var oReq = new XMLHttpRequest();
oReq.open("get", "out.txt", true);
oReq.send();
oReq.onload = function () {
