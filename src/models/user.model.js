const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password "],
  },
});

userSchema.statics.hashPassword = async function (password) {
    return bcrypt.hash(password, 10);
};

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, "secret");
};



/*
const loggedInuser = await userModel.findOne({username:'admin'})
userModel.hashPassword('adminpassword')
token = loggedInuser.generateAuthToken()
*/
//jo statics wale fun hote hai vo attach hote h  sirf userModel se
// aur jo function methods se create karenge uske liye pehle user ko find karna padega fir attach hoga
// agar generateAuthToken use karna hai to loggedInuser se attach hoga 

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
