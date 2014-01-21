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

      // onload check for the q = if its there then  
      if(window.location.hash) {
        // do the ajax call
        $.ajax({
            type: "GET",
            crossdomain: true,
            url: url,
            data: data
          })
          .done(function(data){
            for (var i = 0; i < data.data.children.length; i++) {
              console.log(data.data.children[i].data);
              console.log(data.data.children[i].data.author);
            };
            
            var cards = data.data;
            //the state of the application must be represented by the url in the address bar
            //new implementation in HTML5
            window.history.pushState(null, null, '#q=' + query);
            var subredditTemplate = $("#header").html();
            var theTemplate = Handlebars.compile (subredditTemplate);
            $("#cardSelection").append (theTemplate (cards));
        });
      } else {
      // Fragment doesn't exist
      $.ajax({
            type: "GET",
            crossdomain: true,
            url: url,
            data: data
          })
          .done(function(data){
            for (var i = 0; i < data.data.children.length; i++) {
              console.log(data.data.children[i].data);
              console.log(data.data.children[i].data.author);
            };
            
            var cards = data.data;
            //the state of the application must be represented by the url in the address bar
            //new implementation in HTML5
            var subredditTemplate = $("#header").html();
            var theTemplate = Handlebars.compile (subredditTemplate);
            $("#cardSelection").append (theTemplate (cards));
        });
      }  
        
    }
  };
   $("#searchForm").on("submit", handlers.sendQuery(event));
});