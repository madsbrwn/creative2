var id = {};
var imgurls = {};

$(document).ready(function() {
	var imgId = "img";

    for (var i = 0; i < 5; ++i) {
        id[i] = getIDs();
        imgurls[i] = getURLs(id[i]);
        document.getElementById(imgId + i.toString()).src = imgurls[i];
    }

});

function getURLs(idstr) {
    var url = 'https://icanhazdadjoke.com/j/';
    console.log(idstr);
    url += idstr;
    url += '.png';
    console.log(url);
    return url;
}

function getIDs() {
    var jokeid;

    $.ajax({
        url: 'https://icanhazdadjoke.com/',
        datatype: 'json',
        headers: {
            'Accept': 'application/json'
        },
        async: false,
        success: function(parsed_json) {
            jokeid = parsed_json['id'];
            return jokeid;
        }
    })
    return jokeid;
}
/*(function() {

    function login(callback) {
        var CLIENT_ID = '1d1477f7b6ab40648feb09704216b402';
        var REDIRECT_URI = 'http://cs260.madsbrwn.com/creatives/creative2/main.html';
        function getLoginURL(scopes) {
            return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
              '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
              '&scope=' + 'user-top-read' +
              '&response_type=token';
        }

        var url = getLoginURL([
            'user-read-email'
        ]);

        var width = 450,
            height = 730,
            left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);

        window.addEventListener("message", function(event) {
            var hash = JSON.parse(event.data);
            if (hash.type == 'access_token') {
                callback(hash.access_token);
            }
        }, false);

        var w = location.assign(url,
                            'Spotify',
                            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
                           );

    }

    function getUserData(accessToken) {
        return $.ajax({
            url: 'https://api.spotify.com/v1/me',
            headers: {
               'Authorization': 'Bearer ' + accessToken
            }
        });
    }

    var loginButton = document.getElementById('btn-login');

    loginButton.addEventListener('click', function() {
        login(function(accessToken) {
            getUserData(accessToken)
                .then(function(response) {
                    loginButton.style.display = 'none';
                });
            });
    });

})();
*/