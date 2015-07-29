var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: 'PKMs5qGHrkfRqMIfqVa8NTD9q',
  consumer_secret: 'lXPrTTSxSL0WZvskrdFHF9QoJEk2dHAmcLIOu1BEnBg4nmimYx',
  access_token_key: '3359191738-ilVw7893ZDcdLwoNrWkYZx09JHjDyuyG21fOp1w',
  access_token_secret: 'DKNzSY0Ni3zwjq1dIPODpiVKZWdDrjQDjHPyiGsjRU9Gl'
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
