var express = require('express');
var router = express.Router();
var mongodb=require("mongodb");//引入

/* GET home page. */
router.get('/', function(req, res, next) {
  var mongoCt=mongodb.MongoClient;//创建客户端；
  mongoCt.connect("mongodb://127.0.0.1:27017/travel",(err,db)=>{
    var follow=db.collection("follow");
    follow.find().toArray((err,data)=>{
      if(err){
        throw new Error()
      }else{
        console.log(data);
        res.send(data);
      }
    })
  })
});

module.exports = router;