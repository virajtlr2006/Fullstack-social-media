const express = require("express")
const User = require("../Schema/UserSchema.js")

const router = express()

router.post("/signin",async (req,res) => {
    const{email,password} = req.body
    const UserIn = await User.find({
        "email":email
    })

    if (UserIn[0].password == password) {
        res.json({
        "message":"Signined"
    })
    } else {
        res.json({
        "message":"Invalid Password"
    })
    }
})
router.post("/signup",async (req,res) => {
    const {email,username,password} = req.body
    const newUser = new User({
        "email":email,
        "username":username,
        "password":password
    })
    await newUser.save()
    res.json({
        "message":"signuped"
    })
})

router.post("/profile/",async (req,res) => {
    const {email} = req.body
    const profile = await User.find({
        "email":email
    })
    res.json({
        "profile":profile
    })
})

router.post("/profile/update",async (req,res) => {
    const {email,bio,username,password,profilepic} = req.body
    const UpdatedProfile = await User.findOneAndUpdate({
        "email":email
    },{
        "username":username,
        "bio":bio,
        "password":password,
        "profilepic":profilepic
    })
    res.json({
        "message":"Profile Updated Successfully"
    })
    
})
module.exports = router