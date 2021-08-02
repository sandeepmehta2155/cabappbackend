const mongoose = require('mongoose')
// const express  = require('express')


const CabAppUser = new mongoose.Schema({
  passengerId : {
    type : String
  } ,
  driverId : { 
    type: String
  } , 
  totalPrice :{
    type : Number
  } ,
  fareFee : {
    type : Number   
  }
  } ,
  { timestamps:  true }
) 

module.exports = mongoose.model('CabAppUser' , CabAppUser);