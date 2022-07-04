let ejs = require('ejs');
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(request,response){
  console.log(__dirname,"../");
  response.sendFile(__dirname,"../inputs.html");
})

app.post("/", function(req, res){
  var firstname=parseFloat(req.body.firstname);
  var lastname=parseFloat(req.body.lastname);
  console.log(req.body.firstname);
  console.log(req.body.lastname);
  res.send("BMI is: "+ firstname);
})

app.listen(3000, function(){
  console.log("server running at 3000");
})

