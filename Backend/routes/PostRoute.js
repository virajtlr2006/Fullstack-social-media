const express = require("express")
const Post = require("../Schema/PostSchema.js")
const router = express()

// get all post
router.get("/", async (req, res) => {
    const allPost = await Post.find()
    res.json({
        "allpost": allPost
    })
})

//Get user post
router.get("/userpost", async (req, res) => {
    const {email} = req.body
    const allPost = await Post.find({"email":email})
    res.json({
        "allpost": allPost
    })
})

// User's new post
router.post("/new", async (req, res) => {
    const { caption, img ,email} = req.body
    const newPost = new Post({
        "email":email,
        "caption": caption,
        "img": img
    })
    await newPost.save()
    res.status(201).json({
        "message": "Post created Successfully"
    })
})

// Post deleted 
router.delete("/userpost", async (req, res) => {
    const { id } = req.body
    const deletePost = await Post.findByIdAndDelete(id)
    res.json({
        "message": "Post Deleted Successfully"
    })
})

module.exports = router