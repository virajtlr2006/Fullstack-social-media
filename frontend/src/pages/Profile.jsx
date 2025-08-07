import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useState } from 'react'
// Use state Variable of profile
const Profile = () => {
  const [profile, setprofile] = useState("")
  useEffect(() => {
    GetProfile()
  }, [])

// Get profile function
  const GetProfile = async () => {
    const Email = localStorage.getItem("email")//Get email from local storage

    const userProfile = await axios.post("http://localhost:8080/auth/profile", {
      "email": Email
    })
    console.log(userProfile);
    
    setprofile(userProfile.data.profile[0]);
  }
    const navigate = useNavigate()//Navigate to profile edit
    const EditProfile = async (req, res) => {
      navigate("/profile/edit")
    }

// Logout function

const Logout = async () => {
  const Email = localStorage.removeItem("email")//Fetching email from local storage
  navigate("/signin")
}

    return (
      <div>
        <h1>Profile</h1>
        <p>{profile.username}</p>
        <img src={profile.profilepic} alt="profilepic" />
        <p>{profile.bio}</p>
        <p>{profile.email}</p>
        <button onClick={ EditProfile}>Edit Profile</button>
        <button onClick={Logout}>Log Out</button>
      </div>
    )
  }

  export default Profile
