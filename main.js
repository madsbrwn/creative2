var track_url = 'https://api.spotify.com/v1/me/top/tracks';

$.ajax({
  url : track_url,
  crossDomain : true,
  dataType : "JSON",
  success : function(parsed_json) {
    console.log(parsed_json);
  }
});
