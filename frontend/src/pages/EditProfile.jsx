import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

// Edit profile variables
const EditProfile = () => {
    const [username, setusername] = useState("")
    const [bio, setbio] = useState("")
    const [password, setPassword] = useState("")
    const [profilepic, setprofilepic] = useState("")
    const navigate = useNavigate()

    // Get Profile
    useEffect(() => {
      getprofile()
    }, [])
    
    // Fetch old profile data and store in usestate
    const getprofile= async () => {
        const email = localStorage.getItem("email")
        const profile = await axios.post("http://localhost:8080/auth/profile",{
            "email":email
        })
        //Storing data in state
        setusername(profile.data.profile[0].username)
        setbio(profile.data.profile[0].bio)
        setPassword(profile.data.profile[0].password)
        setprofilepic(profile.data.profile[0].profilepic)
    }

    // Profile Update
    const UpdateProfile = async () => {
        const email = localStorage.getItem("email")
        const newprofile = await axios.post("http://localhost:8080/auth/profile/update",{
          "email":email,
          "username":username,
          "bio":bio,
          "password":password,
          "profilepic":profilepic
        })
        if (newprofile.data.message == "Profile Updated Successfully") {
          navigate("/profile")//Navigate to profile after updating profile
        } else {
          alert("Unable to update profile.Something went wrong,better luck next time.")
        }
        
    }
  return (
    <div>
      <input type="text"placeholder='username' value={username} onChange={(e)=> setusername(e.target.value)} />
      <input type="text"placeholder='bio' value={bio} onChange={(e)=> setbio(e.target.value)} />
      <input type="password"placeholder='password'value={password} onChange={(e)=> setPassword(e.target.value)} />
      <input type="text"placeholder='profile picture' value={profilepic} onChange={(e)=> setprofilepic(e.target.value)} />
      <button onClick={UpdateProfile}>Update profile</button>
    </div>
  )
}

export default EditProfile
