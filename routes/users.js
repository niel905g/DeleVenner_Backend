var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var bcrypt = require('bcrypt');


/* GET til at teste om /api/users virker. */
router.get('/', function (req, res, next) {
  res.send('Den virker!');
});

/* POST til at oprette en bruger */
router.post('/createuser', function (req, res, next) {

  bcrypt.hash(req.body.password, 6, function (err, hash) {
    
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("deleVennerDB");

      var object = {
        fullname: req.body.fullname,
        email: req.body.email,
        password: hash
      };

      dbo.collection("users").insertOne(object, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  });
  res.sendStatus(200);

})

module.exports = router;