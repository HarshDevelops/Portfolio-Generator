let ejs = require('ejs');
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

var $input = $('.form-fieldset > input');
$input.blur(function (e) {
  $(this).toggleClass('filled', !!$(this).val());
});



$('#ongoing-e1').click(function(){
  if ($(this).is(':checked')){
    $(".e1").attr("disabled", true);
    $(".e1l").css("visibility",'hidden');
    $('.e1').val("Present");
  }
  else{
    $(".e1").attr("disabled", false);
    $(".e1l").css("visibility",'visible');
    $('.e1').val("");
  }
});


$('#ongoing-e2').click(function(){
  if ($(this).is(':checked')){
    $(".e2").attr("disabled", true);
    $(".e2l").css("visibility",'hidden');
    $('.e2').val("Present");
  }
  else{
    $(".e2").attr("disabled", false);
    $(".e2l").css("visibility",'visible');
    $('.e2').val("");
  }
 
});


$('#ongoing-e3').click(function(){
  if ($(this).is(':checked')){
    $(".e3").attr("disabled", true);
    $(".e3l").css("visibility",'hidden');
    $('.e3').val("Present");
  }
  else{
    $(".e3").attr("disabled", false);
    $(".e3l").css("visibility",'visible');
    $('.e3').val("");
  }

});


$('#ongoing-e4').click(function(){
  if ($(this).is(':checked')){
    $(".e4").attr("disabled", true);
    $(".e4l").css("visibility",'hidden');
    $('.e4').val("Present");
  }
  else{
    $(".e4").attr("disabled", false);
    $(".e4l").css("visibility",'visible');
    $('.e4').val("");
  }
});







app.get("/", function(request,response){
  console.log(__dirname);
  // response.sendFile(__dirname+"index.html");
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

