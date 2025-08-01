const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
    email:String,
    caption:String,
    img:String
})

const Post = mongoose.model("Post",PostSchema)

module.exports = Post