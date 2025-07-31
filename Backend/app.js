const express = require("express")
const authRoute = require("./routes/AuthRoute.js")
const app = express()
app.listen(8080, async () => {
    console.log("App started")
})

app.get("/",async (req,res) => {
    res.send("Welcome to betagram.")
})

app.use("/auth",authRoute)