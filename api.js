var http = require('http')
  , timeout = Number(process.argv[2] || 0)
  , url = 'http://slowapi.com/delay/' + timeout.toFixed(1);
;

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