import { useState } from "react"
import axios from "axios"


const SignUp = () => {
  // Defined all states
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

// Button submit function
  const onSubmit = async () => {
    try {
      // Try to add user in db
        const a = await axios.post("http://localhost:8080/auth/signup",{
        "email":email,
        "username":username,
        "password":password
    })//Send data to backend
          alert("Signed Up Successfully")

    } catch (error) {//If failed alert shown
      alert("Signed Up failed")
    }
    console.log(a)
  }
  return (
    <div>
      <h1>SignUp</h1>
        <input type="text" placeholder="Username" onChange={(e) => setusername(e.target.value)} />
        <input type="text" placeholder="email"
        onChange={(e) => setemail(e.target.value)}/>
        <input type="password" placeholder="password" 
        onChange={(e) => setpassword(e.target.value)}/>
        <button type="Submit" onClick={onSubmit}>Sign Up</button>
    </div>
  )
}

export default SignUp
