import React, { useState } from 'react'

import axios from "axios"
import { useNavigate } from 'react-router'

const SignUp = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate()
    const onSubmit = async () => {
        const SignUpAPI = await axios.post("http://localhost:8080/auth/signup",{
            "username":username,
            "email":email,
            "password":password
        })
        if (SignUpAPI.data.message == "signuped") {
            navigate("/signin",{
                replace:true
            })
        } else {
            alert("Sign Up Failed")
        }
        
    }
  return (
    <div>
      <input type="text" placeholder='username' onChange={(e)=>setusername(e.target.value)}/>
      <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={onSubmit}>Sign Up</button>
    </div>
  )
}

export default SignUp
