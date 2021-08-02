const express = require('express');
const app = express.Router();
const User = require("./user.schema.js")

app.post("/" , async (req,res)=>{
const { passengerId , driverId , totalPrice , fareFee } = req.body;

//condition for valid passenger details expected 
if(!passengerId)
return res.json({success : false , message : "add valid passenger details"})


//condition for valid driver details expected 
if(!driverId)
return res.json({success : false , message : "add valid driver details"})

const NewDetails = new User({
  passengerId : passengerId,
  driverId : driverId ,
  totalPrice : totalPrice ,
  fareFee : fareFee

})

const savedDetails = await NewDetails.save();

res.json({ success : true , message : "Booking added in DB"})

})

module.exports = app;

