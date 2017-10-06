var track_url = 'https://api.spotify.com/v1/me';

var token = window.location.hash.substr(1);
var accessToken = {};

$.each(token.substr(0).split('&'), function(i, elem) {
   var parts = elem.split('=');
   accessToken[parts[0]] = parts[1];
});

console.log(accessToken['access_token']);
var access = accessToken['access_token'];

$.ajax({
    url : track_url,
    headers : {
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access,
      'Accept': 'application/json'
    },
    datatype: 'jsonp',
    success : function(parsed_json) {
      console.log("it worked?");
    }
});

