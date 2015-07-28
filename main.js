// Requires

// Mood Word lists
var loveWords = "\"i+love+you\"+OR+\"i+love+her\"+OR+\"i+love+him\"+OR+\"all+my+love\"+OR+\"i'm+in+love\"+OR+\"i+really+love\"";
var joyWords = "\"happiest\"+OR+\"so+happy\"+OR+\"so+excited\"+OR+\"i'm+happy\"+OR+\"woot\"+OR+\"w00t\"";
var supriseWords = "\"wow\"+OR+\"O_o\"+OR+\"can't+believe\"+OR+\"wtf\"+OR+\"unbelievable\"";
var angerWords = "\"i+hate\"+OR+\"really+angry\"+OR+\"i+am+mad\"+OR+\"really+hate\"+OR+\"so+angry\"";
var envyWords = "\"i+wish+i\"+OR+\"i'm+envious\"+OR+ \"i'm+jealous\"+OR+\"i+want+to+be\"+OR+\"why+can't+i\"";
var sadWords = "\"i'm+so+sad\"+OR+\"i'm+heartbroken\"+OR+\"i'm+so+upset\"+OR+\"i'm+depressed\"+OR+\"i+can't+stop+crying\"";
var fearWords = "\"i'm+so+scared\"+OR+\"i'm+really+scared\"+OR+\"i'm+terrified\"+OR+\"i'm+really+afraid\"+OR+\"so+scared+i\"";
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
            //console.log(data);
            tweet = JSON.parse(data);
            console.log(Object.keys(tweet.statuses).length-1);
            return Object.keys(tweet.statuses).length-1;
        });
    }
    // Not Needed
    //var mood
    //document.getElementById('#output').innerHTML = mood;
    console.log("LOVE");
    var x = getTweetCount(loveWords);

<<<<<<< HEAD
    console.log("JOY");
    getTweetCount(joyWords);
    console.log("SUPRISE");
    getTweetCount(supriseWords);
    console.log("ANGER");
    getTweetCount(angerWords);
    console.log("ENVY");
    getTweetCount(envyWords);
    console.log("SAD");
    getTweetCount(sadWords);
    console.log("FEAR");
    getTweetCount(fearWords);
    //sleep(10000);
    var count = x.toString() + "\n";

    fs.writeFile("out.txt", count, function(err) {
        if(err) {
            return console.log(err);
        }
=======
console.log("JOY");
getTweetCount(joyWords);
console.log("SUPRISE");
getTweetCount(supriseWords);
console.log("ANGER");
getTweetCount(angerWords);
console.log("ENVY");
getTweetCount(envyWords);
console.log("SAD");
getTweetCount(sadWords);
console.log("FEAR");
getTweetCount(fearWords);
sleep(10000);
var count = x.toString() + "\n";
/*
fs.writeFile("out.txt", count, function(err) {
    if(err) {
        return console.log(err);
    }
>>>>>>> 9f6322cd89c0b1e03a1aca9d17bbbf7f23f2bafb

        console.log("The file was saved!");
    });
