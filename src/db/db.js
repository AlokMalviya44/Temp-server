const mongoose = require('mongoose')

module.exports = async ()=>{
    await mongoose.connect('mongodb://0.0.0.0/production-code')

    mongoose.connection.on('connect', ()=>{
        console.log('Connected to MongoDB');
    })
    mongoose.connection.on('error', (err)=>{
        console.log(err);
    })
    mongoose.connection.on('disconnected', ()=>{
        console.log('Disconnected from MongoDB');
    })
}