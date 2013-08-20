var User = require('./user');

User.find({ id: 1 }, function(user) {
  console.log("1. " + user);
});

console.log('2. Done!\n');