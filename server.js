var http = require('http'), url = require('url'), fs  = require('fs'), 
     sys = require('sys'), path = require('path'), 
     mime = require('mime'),_ = require('underscore'),
     cache = {}, cacheLimit = '', cacheConfig = {size: 1500},
     najax = require('najax');

//using najax module to async call 'GET' for "awww" subreddits
najax({ 
  url:"http://www.reddit.com/r/awww/new.json", 
  type:'GET' 
}).success(function(resp){
  console.log(resp);
  }).error(function(err){
    console.log(error);
    });

function setCacheLimit(){
  cacheLimit = cacheConfig.size;
  return cacheLimit;
}

function send404(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: resource not found.');
  response.end();
}

function sendFile(response, filePath, fileContents) {
  response.writeHead(
    200, 
    {"content-type": mime.lookup(path.basename(filePath))}
  );
  response.end(fileContents);
}

function serveStatic(response, cache, absPath) {
  console.log(_.keys(cache).length);
  var file = absPath;

  //this watchFile method should refresh the cache upon modification of files
  //In case of subreddit search, this may speed up the load time of the images and data
  fs.watchFile(file, function(curr, prev) {
    if (curr.mtime.getTime() > prev.mtime.getTime() && cache[file]) {
      sys.puts("The following file was modified: ", file);
      delete cache[absPath];
    } 
  });

  if (cache[absPath]) {
    sendFile(response, absPath, cache[absPath]);
  } 
  else {
    fs.exists(absPath, function(exists) {
      if (exists) {
        fs.readFile(absPath, function(err, data) {
          if (err) {
            send404(response);
          } 
          else if(_.keys(cache).length < setCacheLimit()){
            cache[absPath] = data;
            sendFile(response, absPath, data);
          }
          else {
            sendFile(response, absPath, data);
          }
        });
      } 
      else {
        send404(response);
      }
    });
  }
}

var server = http.createServer(function(req, res){
  switch (req.method) {
    case 'GET':
        console.log("this request: ", req.url);
        var absPath = false;;

        if (req.url == '/') {
          absPath = './js/index.html';
          serveStatic(res, cache, absPath);
        }
        else if (req.url == ''){
              var query = _.findWhere(data, {id:parseInt(req.url)});
            if(query){
              sendFile(res, query);
            }
            else {
              send404(res);
            }
        }
        else {
          absPath = './public' + req.url;
          serveStatic(res, cache, absPath);
        }
      break;  
  }
});

server.listen(3000, function() {
  console.log("Server listening on port 3000.");
});