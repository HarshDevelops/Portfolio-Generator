let ejs = require('ejs');
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(request,response){
  // console.log(__dirname);
  response.sendFile(__dirname+"/inputs.html");
  app.use(express.static(__dirname + '/public'));
})

app.post("/", function(req, res){
  var firstname=req.body.firstname;
  var lastname=req.body.lastname;
  var imageofyouself1 = req.body.imageofyouself1;
  var imageofyouself2 = req.body.imageofyouself2;
  console.log(imageofyouself1);
  res.send("BMI is: "+ firstname);
})

app.listen(3000, function(){
  console.log("server running at 3000");
})

