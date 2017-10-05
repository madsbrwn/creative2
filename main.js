var track_url = 'https://api.spotify.com/v1/me/top/tracks';

var token = window.location.hash.substr(1);
var accessToken = {};

$.each(token.substr(0).split('&'), function(i, elem) {
   var parts = elem.split('=');
   accessToken[parts[0]] = parts[1];
});

$.ajax({
    url : track_url,
    headers : {
      // 'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + accessToken['access_token']
    },
    success : function(response) {
      console.log("it worked?");
    }
});

