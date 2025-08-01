import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const Profile = () => {
const [profile, setprofile] = useState("")
useEffect(() => {
GetProfile()
}, [])

const GetProfile = async () => {
    const Email = localStorage.getItem("email")
    
    const userProfile = await axios.post("http://localhost:8080/auth/profile",{
        "email":Email
    })
    setprofile(userProfile.data.profile[0]);
}


  return (
    <div>
      <h1>Profile</h1>
      <p>{profile.username}</p>
      <p>{profile.email}</p>
      <button>Log Out</button>
    </div>
  )
}

export default Profile
