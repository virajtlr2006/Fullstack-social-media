import { useState } from "react"

const SignUp = () => {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const onSubmit = async () => {
    console.log(username);
    console.log(email);
    console.log(password);

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
