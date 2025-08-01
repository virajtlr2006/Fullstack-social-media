const express = require("express")

const router = express()

// get all post
router.get("/",async (req,res) => {
    res.send("All post working")
})

//Get user post
router.get("/userpost",async (req,res) => {
    res.send("User post")
})

// User's new post
router.post("/new",async (req,res) => {
    res.send("New user post")
})

// Post deleted 
router.delete("/userpost",async (req,res) => {
    res.send("Post Deleted")
})

module.exports = router