const mongoose = require("mongoose")
const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://virajtlr2006:virajtlr2006@viraj.g7haxve.mongodb.net/?retryWrites=true&w=majority&appName=viraj")
        console.log("MongoDB connection established successully");
        
    } catch (error) {
        console.log("Connectio Failed");
        
    }
}

module.exports = dbConnect