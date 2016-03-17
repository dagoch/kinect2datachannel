// Simple HTTP server 

var http = require('http');
var fs = require('fs');
var path = require('path');


var httpServer = http.createServer(requestHandler);
httpServer.listen(8080);

	console.log("Starting server.js");
var reqcnt=0;


function requestHandler(req, res) {
console.log("in request handler: "+reqcnt++);

  var pathname = req.url;

  // If blank let's ask for audience.html
  if (pathname == '/') {
    pathname = '/index.html';
  }
console.log("serving "+pathname);
  // What's our file extension
  var ext = path.extname(pathname);

  // Map extension to file type
  var typeExt = {
    '.html':	'text/html',
    '.js':		'text/javascript',
    '.css':		'text/css',
    '.jpg':		'image/jpeg',
    '.png':		'image/png'
  };
  var contentType = typeExt[ext] || 'text/plain';

  // Now read and write back the file with the appropriate content type
  fs.readFile(__dirname + pathname,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      // Dynamically setting content type
      res.writeHead(200,{ 'Content-Type': contentType });
      res.end(data);
    }
  );
}

