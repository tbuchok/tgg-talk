module.exports = {
  find: function(options, cb) { 
    var ms = (process.argv[2] || 0) * 1000;
    setTimeout(function() {
      var data = {
        id: options.id,
        name: 'Tom Buchok',
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      console.log("Query: %sms", ms)
      cb(JSON.stringify(data));
    }, ms);
  }
}