var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: 'PKMs5qGHrkfRqMIfqVa8NTD9q',
  consumer_secret: 'lXPrTTSxSL0WZvskrdFHF9QoJEk2dHAmcLIOu1BEnBg4nmimYx',
  access_token_key: '3359191738-ilVw7893ZDcdLwoNrWkYZx09JHjDyuyG21fOp1w',
  access_token_secret: 'DKNzSY0Ni3zwjq1dIPODpiVKZWdDrjQDjHPyiGsjRU9Gl'
});
var currTime = new Date()
// Dummy tweet to get current tweet ID
var params = {status:"This is a dummy tweet to get the current tweet ID. Time:" + currTime};
client.post('statuses/update', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets.id);
  }
});


// Happy
var params = {q: "\"happiest\"+OR+\"so+happy\"+OR+\"so+excited\"+OR+\"i'm+happy\"+OR+\"woot\"+OR+\"w00t\"", count: 100};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {

    happyTweets = (tweets.statuses.length);
    console.log("HAPPY TWEETS");
    console.log(happyTweets);

  }
});
// Suprise
var params = {q: "\"wow\"+OR+\"O_o\"+OR+\"can't+believe\"+OR+\"wtf\"+OR+\"unbelievable\"", count: 100};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    supriseTweets = (tweets.statuses.length);
    console.log("SUPRISED TWEETS");
    console.log(supriseTweets);
  }
});
// Anger

var params = {q: "\"i+hate\"+OR+\"really+angry\"+OR+\"i+am+mad\"+OR+\"really+hate\"+OR+\"so+angry\"", count: 100};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    angerTweets = (tweets.statuses.length);
    console.log("ANGER TWEETS");
    console.log(angerTweets);
  }
});
// Sadness

var params = {q: "\"i'm+so+sad\"+OR+\"i'm+heartbroken\"+OR+\"i'm+so+upset\"+OR+\"i'm+depressed\"+OR+\"i+can't+stop+crying\"", count: 100};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    sadTweets = (tweets.statuses.length);
    console.log("SAD TWEETS");
    console.log(sadTweets);
  }
});
