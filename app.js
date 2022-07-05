const ejs = require('ejs');
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs'); 

app.get("/", function(req,response){
  // console.log(__dirname);
  app.use(express.static(__dirname + '/public'));
  // response.sendFile(__dirname+"/inputs.html");
  
  // app.use(express.static(__dirname + '/js'));

  response.sendFile(__dirname + '/inputs.html');
})


app.post("/new", function(req,response){
  app.use(express.static(__dirname + '/public'));
  
  var firstname=req.body.firstname;
  var lastname=req.body.lastname;
  console.log(firstname);
  console.log(lastname);
  
  var imageofyourself1 = req.body.imageofyouself1;
  var imageofyourself2 = req.body.imageofyouself2;
  console.log(imageofyourself1);
  
  var education1 = req.body.education1;
  var education1start = req.body.education1start;
  var education1end = req.body.education1end;

  
  var education2 = req.body.education2;
  var education2start = req.body.education2start;
  var education2end = req.body.education2end;

  var education3 = req.body.education3;
  var education3start = req.body.education3start;
  var education3end = req.body.education3end;

  var education4 = req.body.education4;
  var education4start = req.body.education4start;
  var education4end = req.body.education4end;

  console.log("EDUCATION " + education4);
  console.log(req.body.python);
  console.log(req.body.kotlin);

  var myfile1 = req.body.myfile1;
  var myfile2 = req.body.myfile2;

  var myfile1desc = req.body.myfile1desc;
  var myfile2desc = req.body.myfile2desc;

  console.log(myfile2desc);
  console.log('okget');

  response.render("index",{firstname:firstname, education1:education1, education2:education2,education4:education4,education3:education3, education1start:education1start,education2start:education2start,education3start:education3start,education4start:education4start, education1end:education1end,education2end:education2end,education3end:education3end,education4end:education4end,myfile1desc:myfile1desc, myfile2desc:myfile2desc });

})

app.post("/", function(req, res){
  console.log("ok")

})

app.listen(3000, function(){
  console.log("server running at 3000");
})

