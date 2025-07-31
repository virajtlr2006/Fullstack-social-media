const express = require("express")
const authRoute = require("./routes/AuthRoute.js")
const mongoConnect = require ("./Config/dbconnect.js")
const app = express()
app.use(express.json())

app.listen(8080, async () => {
    console.log("App started")
    await mongoConnect()
})

app.get("/",async (req,res) => {
    res.send("Welcome to betagram.")
})

app.use("/auth",authRoute)