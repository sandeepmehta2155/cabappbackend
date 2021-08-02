const express = require('express');
const app = express.Router();
const User = require("./user.schema.js");

app.get("/",async(req,res)=>{

  const weeklyData = await User.findOne({ driverId : "dvr1234"  })
  // const driver = await User.find({})
  const date = weeklyData.createdAt;

  res.json({success : true , resp : weeklyData})
})

module.exports = app;