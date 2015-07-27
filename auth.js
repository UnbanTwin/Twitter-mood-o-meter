// Authentication for Twitter API
var OAuth = require('OAuth');
var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'PKMs5qGHrkfRqMIfqVa8NTD9q', // Application key
      'your Twitter application secret',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      'your user token for this app', 
      //you can get it at dev.twitter.com for your own apps
      'your user secret for this app', 
      //you can get it at dev.twitter.com for your own apps
      function (e, data, res){
        if (e) console.error(e);        
        console.log(require('util').inspect(data));
        done();      
      });    
});