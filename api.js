var http = require('http')
  , timeout = Number(process.argv[2] || 0)
  , url = 'http://slowapi.com/delay/' + timeout.toFixed(1);
;

http.get(url, function(res) {
  res
  .on('end', function() { console.log('\nEnded!') })
  .pipe(process.stdout)
  ;
});
console.log(url);