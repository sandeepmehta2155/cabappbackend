const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express.Router();

const uri = process.env['uri'];

app.use(cors())
app.use(bodyparser.json())

const initialMongooseConnection = () => {

mongoose.connect(uri , {
  useNewUrlParser : true,
  useUnifiedTopology : true
})

}

module.exports  = { initialMongooseConnection };

