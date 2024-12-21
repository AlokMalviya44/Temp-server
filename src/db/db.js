const mongoose = require("mongoose");

const connectDB =  () => {
   mongoose
    .connect("mongodb://0.0.0.0/production-code")
    .then(() => {
      console.log("Connected to the Database");
    })
    .catch((err) => {
      console.log(err);
    });

  // mongoose.connection.on('connect', ()=>{
  //     console.log('Connected to MongoDB');
  // })
  // mongoose.connection.on('error', (err)=>{
  //     console.log(err);
  // })
  // mongoose.connection.on('disconnected', ()=>{
  //     console.log('Disconnected from MongoDB');
  // })
};

module.exports = connectDB
