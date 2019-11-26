var bcrypt = require('bcrypt');

bcrypt.hash('helloworld' + 'thedoctor', 6, function(err, hash) {
    
  bcrypt.compare('helloworld' + 'thedoctor', hash, function(err, res) {
    
    if(res) {
     
      console.log(true);

    } else {
     
      console.log(false);

    } 

  });

  });