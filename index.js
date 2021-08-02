const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express();
app.use(cors());
app.use(bodyParser.json());

const {initialMongooseConnection} = require("./mongoose.initialconnect.js");

initialMongooseConnection();

const newBooking = require("./booked.rides.js");


// For adding new cab details
app.use("/newbookedcab" , newBooking);

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});


/**
 * 404 Route Handler
 * Note: DO not MOVE. This should be the last route
 */
app.use((req, res) => {
  res.status(404).json({ success: false, message: "route not found on server, please check"})
})

/**
 * Error Handler
 * Don't move
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "error occured, see the errMessage key for more details", errorMessage: err.message})
})

app.listen(3000, () => {
  console.log('server started');
});