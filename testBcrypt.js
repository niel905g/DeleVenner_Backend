var bcrypt = require('bcrypt');

bcrypt.hash('helloworld', 10, function(err, hash) {
    console.log(hash);
  });