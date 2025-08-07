const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    profilepic:String,
    bio:String
})

const User = mongoose.model("User",UserSchema)

module.exports = User