import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'


const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate()

    const onSubmit = async () => {
        const SignInAPI = await axios.post("http://localhost:8080/auth/signin",{
            "email":email,
            "password":password
        })
        console.log(SignInAPI.data.message)
          if (SignInAPI.data.message == "Signined") {
              localStorage.setItem("email",email)
              navigate("/",{
                  replace:true
              })

          } else {
              alert("Invalid password")
          }
    }
  return (
    <div>
      <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
      <button onClick={onSubmit}>Log In</button>
    </div>
  )
}

export default SignIn
