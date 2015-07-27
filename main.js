// Mood Word lists
var loveWords = "\"i+love+you\"+OR+\"i+love+her\"+OR+\"i+love+him\"+OR+\"all+my+love\"+OR+\"i'm+in+love\"+OR+\"i+really+love\""
var joyWords = "\"happiest\"+OR+\"so+happy\"+OR+\"so+excited\"+OR+\"i'm+happy\"+OR+\"woot\"+OR+\"w00t\""
var supriseWords = 
// Authentication for Twitter API
var OAuth = require('OAuth');
var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'PKMs5qGHrkfRqMIfqVa8NTD9q', // Application key
      'lXPrTTSxSL0WZvskrdFHF9QoJEk2dHAmcLIOu1BEnBg4nmimYx', // Application secret
      '1.0A',
      null,
      'HMAC-SHA1'
    );
var getTweetCount = function(search) {
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=' + search + '&count=100&include_entities=false',
      '3359191738-ilVw7893ZDcdLwoNrWkYZx09JHjDyuyG21fOp1w', // Access token
      'DKNzSY0Ni3zwjq1dIPODpiVKZWdDrjQDjHPyiGsjRU9Gl',
      function (e, data, res){
        if (e) console.error(e);
        console.log(data);
		tweet = JSON.parse(data);
		console.log(Object.keys(tweet.statuses).length-1);
      });
}

//var mood
//document.getElementById('#output').innerHTML = mood;
getTweetCount("FoCSOS");
//
