
<h1>Subreddit awww search</h1>
  <h3>version 1: through index.html</h3>
  <p></p>
  <h3>Version 2: through indexV2.html</h3>
   <p></p>
  <h3>Server-side component in node.js; to develop own search engine away from reddit api</h3>
</h1>

<h2>Documentation:</h2>

<p>
Originally this was a straght forward test where the data, json object of subreddit /awww/ was to be rendered. There was no reason for implementing a back-end in node.js here. version 1 was to be a basic solution where an ajax request was made and upon form submit the hash should update the query and reflect the state of the app in the url. For this, the older html methods are deprecated and I used HTML5 pushstate.

The CHALLENGE was that subreddit /r/awww/ , with three "w" did NOT exist. /a/aww/ , with two "w" did exist. Upon closer inspection, the json file for the reddit could be obtained simply by requesting ".json" after the hash. That originially did not seem to be sortable of the reddit api but later, I wrote the correct sort query to obtain specific query searched subreddit results. 

Why the node.js back-end:
       After initially not being able to use the reddit api correctly, I decided to build my own search engine for the reddit. 

       In server.js, I began to implement several functions to handle requests and respond with the appropriate data for the search query. This going to be fun!

       However, this seamed to be a longer project than I thought. I still had to work on the front-end. 

       At this point I went back and refined the main.js file to use reddit api to sort /r/awww/ (which does not seam to exist, but does).

       I proceeded to use backbone.js to handle a nice UI. Due to time constainted the backbone.js version (version 2) does not function properly yet, so the basic version, version 1 is represented through the index.html and main.js file. 

Version 1: Some improvements need to be done
  a. refactor code or setup better login to accomodate ajax in reference to application state; details in comments inside main.js file

</p>

