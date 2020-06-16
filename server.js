const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

//express
const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT ||5000;


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT${PORT}!`);
});

//mongoose
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology:true,useCreateIndex: true},
  (err)=> {
    if(err) throw err;
    console.log("Mongoose connection established")
  });

  //routes
  app.use("/users", require("./routes/userRouter"));