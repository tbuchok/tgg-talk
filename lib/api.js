var http = require('http');

function API(timeout) {
  this.timeout = timeout;
}

API.prototype.start = function() {
  var self = this;
  http.createServer(function(req, res) {
    var server = this;
    setTimeout(function() {
      res.end('Lorem ipsum dolor sit amet.');
      server.close();
    }, self.timeout * 1000);
  }).listen(8000);
}

API.prototype.url = function() {
  return 'http://localhost:8000/delay/' 
          + this.timeout.toFixed(1);
}

module.exports = API;