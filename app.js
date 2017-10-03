'use-strict';
var url = "https://accounts.spotify.com/en/authorize?client_id=1d1477f7b6ab40648feb09704216b402&response_type=code&redirect_uri=http://cs260.madsbrwn.com/labs/lab2/weather.html&scope=user-read-private%20user-read-email&state=34fFs29kd09";
console.log(url);

$("#loginbtn").click(function () {
  $.get(url, function (data) {
    alert("it worked");
  });
});

function createUser() {
    return Math.random().toString(36).substr(2, 20);
};
