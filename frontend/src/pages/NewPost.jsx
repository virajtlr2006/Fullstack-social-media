import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'


const NewPost = () => {

    const navigate = useNavigate()
    const [caption, setcaption] = useState("")
    const [img, setimg] = useState("")
    const onSubmit = async () => {
        const email = localStorage.getItem("email")
        const newPost = await axios.post("http://localhost:8080/post/new", {
            "email": email,
            "caption": caption,
            "img": img
        })
        if(newPost.data.message == "Post created Successfully"){
            navigate("/",{
                replace:true
            })
            alert("Post created successfully")
        }
        else{
            alert("NOt post")
        }
    }
    return (
        <div>
            <input type="text" placeholder='caption' onChange={(e) => setcaption(e.target.value)} />
            <input type="text" placeholder='image/video' onChange={(e) => setimg(e.target.value)} />
            <button onClick={onSubmit}>Post</button>
        </div>
    )
}

export default NewPost
