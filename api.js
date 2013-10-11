var http = require('http')
  , timeout = Number(process.argv[2] || 0)
  , API = new require('./lib/api')
  , api = new API(timeout)
;

api.start();

console.log('API: Hitting: %s \n', api.url());
http.get(api.url(), function(res) {
  res
    .on('error', function(err) { console.error(err) })
    .on('end', function() { console.log('\nAPI: Ended!') })
    .pipe(process.stdout)
  ;
});

// We are not blocked, we can do other things:
console.log('OTHER: Do other stuff while we wait ... \n');
console.log('OTHER: 1 + 1: %s', 1 + 1);
console.log('OTHER: Circle area with radius `4`: %s \n'
            , Math.PI * Math.pow(2, 4));


