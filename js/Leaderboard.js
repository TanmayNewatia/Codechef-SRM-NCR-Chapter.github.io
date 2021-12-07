var settings = {
  "url": "https://codechef-website-backend-production.up.railway.app/",
  "method": "GET",
  "timeout": 0,
};
$.ajax(settings).done(function (response) {
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