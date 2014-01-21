
<h1>Subreddit awww search</h1>
  <h3>version 1: through index.html</h3>
  <p></p>
  <h3>Version 2: through indexV2.html</h3>
   <p></p>
  <h3>Server-side component in node.js; to develop own search engine away from reddit api</h3>
</h1>

<h2>Documentation:</h2>

<p>
Originally this was a straght forward test where the data, json object of subreddit /awww/ was to be rendered. There was no reason for implementing a back-end in node.js here. version 1 was to be a basic solution where an ajax request was made and upon form submit the hash should update the query and reflect the state of the app in the url. For this, the older html methods are deprecated and I used HTML5 pushstate.</p>

<p>The CHALLENGE was that subreddit /r/awww/ , with three "w" did NOT exist. /a/aww/ , with two "w" did exist. More accurately, the reddit is not always accessable. Upon closer inspection, the json file for the reddit could be obtained simply by requesting ".json" after the hash. /r/awww/ originially did not seem to be sortable from the reddit api but later, I wrote the correct sort query to obtain specific query searched subreddit results. </p>

<p>Why the node.js back-end:
       After initially not being able to use the reddit api correctly, I decided to build my own search engine for the reddit. 

       In server.js, I began to implement several functions to handle requests and respond with the appropriate data for the search query. This was going to be fun!

       However, this seemed to be a longer project than I thought. I still had to work on the front-end. 

       At this point I went back and refined the main.js file to use the reddit api to sort /r/awww/ (which does not seem to exist, but does).
</p>
<p>Original Plan to handle the front-end UI: I proceeded to use backbone.js to handle a nice UI. Due to time constaints the backbone.js version (version 2) does not function properly yet, so the basic version, version 1 is represented through the index.html and main.js file. indexV2.html is the backbone.js version. The following is a list of functionality intended leveraging backbone.js.

  <li>allow for saving the subreddits into your own collection of favorites; through backbone.js models and collects. This would allow for our oun instances of the subreddits on the client and server-side through backbone.js cid.
  </li>
  <li>use of backbone.js routers to handle application state
  </li>
  <li>use of backbone.js routers to handle application state
  </li>

</p>
<ol>
  <li>Version 1: Some improvements need to be made
    a. refactor code or setup better login to accomodate ajax in reference to application state; details in comments inside main.js file
  </li>
    <li>Version 2: Some improvements need to be made
    a. refactor code or setup better login to accomodate ajax in reference to application state; details in comments inside main.js file
  </li>
    <li>server.js file: not complete
    a. I used the najax module to handle an async request for the raw json file. One on the server persisting asynchronously, I don't need to worry about having to depend on reddit.com. This would also drastically increase my application load time. In server.js, I accomodate the search query requests and with the appropriate response. 
    Further, I intended to cache 1500 requests to speed up the application load time. One may ask, well, since the raw json file is being requested asynchronously, should not the cache be updated? Yes, it should. This is where I utilized fs.watchFile in my implementation. If an image file is modified from reddit, the server code will detect it and recache. 
    This implementation does not currently work due to time constraints.
  </li>
</ol>
</p>

