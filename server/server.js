const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

const app = express();


app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true, 
}));
app.use(express.json());
app.use(cookieParser());


dotenv.config({ path: "./.env" });


const port = process.env.PORT || 5001;


const options = { dbName: "foodOrderDeliverydb" };


mongoose
  .connect(process.env.MONGO_URL, options)
  .then(() => {
    console.log("Connected to database");

    app.listen(port, () => {
      console.log("Listening for requests on port", port);
    });
  })
  .catch((err) => {
    console.log(err); 
  });

