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
<<<<<<< HEAD
      // 'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + accessToken['access_token']
=======
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access,
      'Accept': 'application/json'
>>>>>>> ed1374858f1e34b87948264b4c32d99583e16a2f
    },
    datatype: 'jsonp',
    success : function(parsed_json) {
      console.log("it worked?");
    }
});

