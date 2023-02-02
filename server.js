var http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    fs.readdir('/home/projects', (err, files) => {
      files.forEach((file) => {
        res.write('\n' + file);
      });
      res.end();
    });
    res.write('Hello, Web!'); //write a response to the client
  })
  .listen(8080); //the server object listens on port 8080

console.log('Server running on port 8080');
