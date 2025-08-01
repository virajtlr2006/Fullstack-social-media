const express = require("express")
const authRoute = require("./routes/AuthRoute.js")
const mongoConnect = require ("./Config/dbconnect.js")
const cors =require("cors")
const PostRoute = require("./routes/PostRoute.js")
const app = express()
app.use(cors())

app.use(express.json())

app.listen(8080, async () => {
    console.log("App started")
    await mongoConnect()
})

app.get("/",async (req,res) => {
    res.send("Welcome to betagram.")
})

app.use("/auth",authRoute)
app.use("/post",PostRoute)