import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Heart } from 'lucide-react';

const AllPost = () => {
    const [Posts, setPosts] = useState(null)
    const allPost = async () => {
        const post = await axios.get("http://localhost:8080/post")
        setPosts(post.data.allpost)
    }
    useEffect(() => {
        allPost()
    }, [])
    return (
        <div>
            {Posts &&
                Posts.map((post, index) =>
                (
                    <div>
                        <img src={post.img} alt="post Image" />\
                        <br />
                        <Heart/>
                        <p key={index}>{post.caption}</p>
                    </div>
                    
                )
                )
            }
        </div>
    )
}

export default AllPost
