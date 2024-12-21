const mongoose = require("mongoose");



module.exports = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/production-code').then(()=>{
        console.log("Connected to DB");
    }).catch((err)=>{
        console.log('Failed to connect to the database',err);
    })
}

// const connectDB = async () => {
//    await mongoose
//     .connect("mongodb://127.0.0.1:27017/production-code")
//     .then(() => {
//       console.log("Connected to the Database");
//     })
//     .catch((err) => {
//       console.log( 'Failed to connect to Database',err);
//     })

//   // mongoose.connection.on('connect', ()=>{
//   //     console.log('Connected to MongoDB');
//   // })
//   // mongoose.connection.on('error', (err)=>{
//   //     console.log(err);
//   // })
//   // mongoose.connection.on('disconnected', ()=>{
//   //     console.log('Disconnected from MongoDB');
//   // })
// };

// connectDB()
// module.exports = mongoose.connection
