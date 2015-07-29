// Requires
var p = function(ccc) {
    console.log(ccc);
}
fs = require("fs");
p("requirecomplete");
// Mood Word lists
var nums = [7];
var count = "";
var tweet;
var loveWords = "\"i+love+you\"+OR+\"i+love+her\"+OR+\"i+love+him\"+OR+\"all+my+love\"+OR+\"i'm+in+love\"+OR+\"i+really+love\"";
var joyWords = "\"happiest\"+OR+\"so+happy\"+OR+\"so+excited\"+OR+\"i'm+happy\"+OR+\"woot\"+OR+\"w00t\"";
var supriseWords = "\"wow\"+OR+\"O_o\"+OR+\"can't+believe\"+OR+\"wtf\"+OR+\"unbelievable\"";
var angerWords = "\"i+hate\"+OR+\"really+angry\"+OR+\"i+am+mad\"+OR+\"really+hate\"+OR+\"so+angry\"";
var envyWords = "\"i+wish+i\"+OR+\"i'm+envious\"+OR+ \"i'm+jealous\"+OR+\"i+want+to+be\"+OR+\"why+can't+i\"";
var sadWords = "\"i'm+so+sad\"+OR+\"i'm+heartbroken\"+OR+\"i'm+so+upset\"+OR+\"i'm+depressed\"+OR+\"i+can't+stop+crying\"";
var fearWords = "\"i'm+so+scared\"+OR+\"i'm+really+scared\"+OR+\"i'm+terrified\"+OR+\"i'm+really+afraid\"+OR+\"so+scared+i\"";
p("varsdef");
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
p("oauthdonecomplete");
var getTweetCount = function(search, y) {
    oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=' + search + '&count=100&include_entities=false',
        '3359191738-ilVw7893ZDcdLwoNrWkYZx09JHjDyuyG21fOp1w', // Access token
        'DKNzSY0Ni3zwjq1dIPODpiVKZWdDrjQDjHPyiGsjRU9Gl',
        function (e, data, res){
            if (e) console.error(e);
            //console.log(data);
            tweet = JSON.parse(data);
            p("data parsed")
            console.log("123");
            //console.log(data);
            console.log(Object.keys(tweet.statuses).length-1);
            getTweets();

            collate();
            fs.writeFile("out.txt", count, function(err) {
              if(err) {
              return console.log(err);
              }


              console.log("The file was saved!");

             });


        });
    }
    p("oauthgetdef");
    getTweetCount(tweet);

    var getTweets = function() {
        console.log("LOVE");
        getTweetCount(loveWords, 0);
        console.log(tweet)
        nums[0] = Object.keys(tweet.statuses).length-1;
        console.log("JOY");
        getTweetCount(joyWords, 1);
        nums[1] = Object.keys(tweet.statuses).length-1;
        console.log("SUPRISE");
        getTweetCount(supriseWords, 2);
        nums[2] = Object.keys(tweet.statuses).length-1;
        console.log("ANGER");
        getTweetCount(angerWords, 3);
        nums[3] = Object.keys(tweet.statuses).length-1;
        console.log("ENVY");
        getTweetCount(envyWords, 4);
        console.log("SAD");
        getTweetCount(sadWords, 5);
        console.log("FEAR");
        var test = getTweetCount(fearWords, 6);

    }
    p("getTweetsdef");


    var collate = function() {

        p("getTweetsrun");
        for(var i=0; i<=6; i++){
            p("in" + i);
            console.log("test");
            count = count + nums[i].toString();
            p("done" + i);
            p(count);
        }

    }
    p("end")
    setTimeout(collate, 15000);
