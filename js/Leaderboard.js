var settings = {
  "url": "https://api.codechef.com/oauth/token",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "content-Type": "application/json",
  },
  "data": JSON.stringify({
    "grant_type": "client_credentials",
    "scope": "public",
    "client_id": "",
    "client_secret": "",
    "redirect_uri": ""
  }),
};

$.ajax(settings).done(function (response) {
  authcode = response.result.data.access_token;
  var settings2 = {
    "url": "https://api.codechef.com/ratings/all?fields=rating&country=India&institution=SRM%20Institute%20Of%20Science%20And%20Technology&sortBy=rating&sortOrder=desc&limit=99",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json",
      "Authorization": "Bearer " + authcode,
    },
  };

  $.ajax(settings2).done(function (response) {
    console.log(response.result.data.content );
    var row = '';
    for (var i = 0; i < response.result.data.content.length; i++) {
      row += '<tr>';
      row += '<td>' + (i+1) + '.</td>';
      row += '<td>' + response.result.data.content[i].fullname + '</td>';
      row += '<td>' + response.result.data.content[i].rating + '</td>';
      row += '</tr>';
    }
    $('#tbody').append(row);
  });
});