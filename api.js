var http = require('http')
  , timeout = Number(process.argv[2] || 0)
  , url = 'http://localhost:8000/delay/' + timeout.toFixed(1);
;

http.createServer(function(req, res) {
  var server = this;
  setTimeout(function() {
    res.end('Lorem ipsum dolor sit amet.');
    server.close();
  }, timeout * 1000);
}).listen(8000);

console.log('API: Hitting: %s \n', url);
http.get(url, function(res) {
  res
  .on('error', function(err) { console.error(err) })
  .on('end', function() { console.log('\nAPI: Ended!') })
  .pipe(process.stdout)
  ;
});

// We are not blocked, we can do other things:
console.log('OTHER: Do other stuff while we wait ... \n');
console.log('OTHER: 1 + 1: %s', 1 + 1);
console.log('OTHER: Circle area with radius `4`: %s', Math.PI * Math.pow(2, 4));
console.log('\n');