const http = require('http');
const fs = require('fs');
const port = process.argv[2] || 8080;

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data){
        if(err){
          res.statusCode = 500;
          res.end(`Error getting the file: ${err}.`);
        } else {
          // if the file is found, set Content-type and send data
          res.setHeader('Content-type', 'text/html');
          res.end(data);
        }
      });
}).listen(parseInt(port));

console.log(`Server listening on port ${port}`);