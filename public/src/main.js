$(document).ready(function(){

  var handlers = {
    sendQuery: function(event){
      var path = event.target.baseURI;
      console.log("this is the query", path);
      var pattern = /q=(.*)/;
      console.log(path);
      var query = path.match(pattern)[1];

      var url = "http://www.reddit.com/r/aww/search.json?q=" + query + "&sort=relevance&restrict_sr=on&t=all";
      console.log(url);
      var data = {};
        $.ajax({
          type: "GET",
          crossdomain: true,
          url: url,
          data: data
        })
        .done(function(data){
          console.log(data.data.children[10].data.author);
          var cards = data.data;
          //the state of the application must be represented by the url in the address bar
          //new implementation in HTML5
          window.history.pushState(null, null, '#q=' + query);
          var subredditTemplate = $("#header").html();
          var theTemplate = Handlebars.compile (subredditTemplate);
          $("#cardSelection").append (theTemplate (cards));
      });
    }
  };
   $("#searchForm").on("submit", handlers.sendQuery(event));
});