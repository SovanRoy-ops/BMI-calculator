//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Normal Calculator
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);

  var result = number1 + number2;

  res.send("The Calculation result is "+result);
});



// bmi calculator
app.get("/bmicalculator",function(req,res){

  
  res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var wt = Number(req.body.Weight);
  var ht = Number(req.body.Height);

  var bmi = wt/(ht*ht);

  res.send("Your BMI is "+bmi);

});


app.listen(3000,function(){
  console.log("Server started on port 3000");
});
