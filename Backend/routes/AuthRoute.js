const express = require("express")

const router = express()

router.post("/signin",async (req,res) => {
    res.json({
        "message":"Signined"
    })
})
router.post("/signup",async (req,res) => {
    res.json({
        "message":"signuped"
    })
})

module.exports = router