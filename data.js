var db;
var title, body;
loadData = function() {
  console.log("ready");
  $.getJSON("data.json", function(data) {
      db = data;
      title = document.getElementById('main-title');
      body = document.getElementById('main-body');
    })
    .done(function() {
      title.innerHTML = db.articles[0].title;
      body.innerHTML = db.articles[0].body;

    });

}
$(document).ready(loadData);
