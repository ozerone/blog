var db;
var title, body, date;
loadData = function() {
  console.log("ready");
  $.getJSON("data.min.json", function(data) {
      db = data;
      title = document.getElementById('main-title');
      body = document.getElementById('main-body');
      date = document.getElementById('main-date');
    })
    .done(function() {
      title.innerHTML = db.articles[0].title;
      body.innerHTML = db.articles[0].body;
      date.innerHTML = db.articles[0].date;

    });

}
$(document).ready(loadData);
