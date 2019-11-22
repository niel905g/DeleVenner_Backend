var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
mongo = require('mongodb');
var url = "mongodb://localhost:27017/";

/* Viser clients som JSON */
router.get('/json', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("deleVennerDB");
      dbo.collection("Users").find({}).toArray(function (err, result) {
          if (err) throw err;
          // console.log(result);
          var obj = {};
          obj.client = result;
          res.json(obj);
          db.close();
      });
  });
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("deleVennerDB");
    dbo.collection("users").find({}).toArray(function (err, result) {
    var obj = {};
    obj.client = result;  
    
    res.render('users', obj);
    db.close();
    });
  });
});

router.post('/delete/:id', function (req, res) {
  MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("deleVenner");
      var id = req.params.id;
      dbo.collection("users").deleteOne({
          _id: new mongo.ObjectId(id)
      }, function (err, results) {

      });
      
      res.redirect("/users");
  });
}); 

module.exports = router;
