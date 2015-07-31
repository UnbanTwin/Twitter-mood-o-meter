// Test my git commit abilitioes
var Twitter = require("twitter");
var fs = require("fs");
var fsex = require("fs-extra");
var client = new Twitter({
  consumer_key: 'PKMs5qGHrkfRqMIfqVa8NTD9q',                                  // This will be on the server, so it will not
  consumer_secret: 'lXPrTTSxSL0WZvskrdFHF9QoJEk2dHAmcLIOu1BEnBg4nmimYx',      // be visibile
  access_token_key: '3359191738-ilVw7893ZDcdLwoNrWkYZx09JHjDyuyG21fOp1w',
  access_token_secret: 'DKNzSY0Ni3zwjq1dIPODpiVKZWdDrjQDjHPyiGsjRU9Gl'
});
var currTime = new Date();
var filtering = 10;
var threshold;
var uppthresh;
var totalTweets;
var threshWindow = 100000000000;
var happy;
var suprise;
var anger;
var sadness;
// Dummy tweet to get current tweet ID
var params = {status:"This is a dummy tweet to get the current tweet ID. Time:" + currTime};
client.post('statuses/update', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets.id_str);
    tweetid = tweets.id_str;
    fs.writeFile("data/id.txt", tweetid.toString(), function(err) {
    console.log(tweetid);
    console.log("Tweet file saved");

    threshold = tweetid - threshWindow;

    //uppthresh = tweetid + 100
    // Happy tweets
    var params = {q: "happiest OR so+happy OR so+excited OR im+happy OR woot OR w00t", count:100, result_type: "recent"};
    params.since_id = threshold
    console.log(threshold);
    client.get('search/tweets', params, function(error, tweets, response) {
      if (!error) {
        //console.log(tweets);
        happyTweets = (tweets.statuses.length);
        console.log("HAPPY TWEETS");
        console.log(happyTweets);
        happy = happyTweets
        // write to file here later
        fs.writeFile("data/happy.txt", happy, function(err){});
      }
    });
    var params = {q: "O_o OR can't+believe OR wtf OR unbelievable", count:100, result_type: "recent"};
    params.since_id = threshold
    console.log(threshold);
    client.get('search/tweets', params, function(error, tweets, response){
      if (!error) {
        //console.log(tweets);
        suprisedTweets = (tweets.statuses.length);
        console.log("SUPRISED TWEETS");
        console.log(suprisedTweets);
        suprised = suprisedTweets;
        fs.writeFile("data/suprised.txt", suprised, function(err){});
      }
    });
    var params = {q: " i+hate OR really+angry OR i+am+mad OR really+hate OR so+angry ", count:100, result_type: "recent"};
    params.since_id = threshold
    console.log(threshold);
    client.get('search/tweets', params, function(error, tweets, response){
      if (!error) {
        //console.log(tweets);
        angerTweets = (tweets.statuses.length);
        console.log("ANGRY TWEETS");
        console.log(angerTweets);
        anger = angerTweets;
        fs.writeFile("data/anger.txt", anger, function(err){});
      }
    });
    var params = {q: "i'm+so+sad OR i'm+heartbroken OR i'm+so+upset OR i'm+depressed OR i+can't+stop+crying", count:100, result_type: "recent"};
    params.since_id = threshold
    console.log(threshold);
    client.get('search/tweets', params, function(error, tweets, response){
      if (!error) {
        //console.log(tweets);
        sadTweets = (tweets.statuses.length);
        console.log("SAD TWEETS");
        console.log(sadTweets);
        sadness = sadTweets;
        fs.writeFile("data/sad.txt", sadness, function(err){});
      }
    });
    // end of the tower of callbacks
    });
  }
});

// gecode 50.724949, -3.530624
