var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: 'PKMs5qGHrkfRqMIfqVa8NTD9q',                                  // This will be on the server, so it will not
  consumer_secret: 'lXPrTTSxSL0WZvskrdFHF9QoJEk2dHAmcLIOu1BEnBg4nmimYx',      //
  access_token_key: '3359191738-ilVw7893ZDcdLwoNrWkYZx09JHjDyuyG21fOp1w',
  access_token_secret: 'DKNzSY0Ni3zwjq1dIPODpiVKZWdDrjQDjHPyiGsjRU9Gl'
});

var params = {resources: "search"};
client.get('application/rate_limit_status', params, function(error, tweets, response){
  if (!error) {
    console.log(JSON.stringify(tweets));
  }
});
