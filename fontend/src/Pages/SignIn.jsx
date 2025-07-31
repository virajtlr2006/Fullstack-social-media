import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"

// Navigate to othertab
const SignIn = () => {
    const navigate = useNavigate();
// All usestates required in form
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    // OnSubmit function
    const onSubmit = async () => {
        try {
            const a = await axios.post("http://localhost:8080/auth/signin", {
                "email": email,
                "password": password
            })//send request too api
            console.log(a);
            if (a.data.message == "Signined") {
                localStorage.setItem("email",email)//if signed in store email to  local storage
                navigate("/", {replace: true})//redirect to homepage
            } else {
                alert("Invalid Password")
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>SignIn</h1>
            <input type="text" placeholder="email" onChange={(e) => setemail(e.target.value)} />
            <input type="password" placeholder="[assword]" onChange={(e) => setpassword(e.target.value)} />
            <button onClick={onSubmit}>Sign In</button>
        </div>
    )
}

export default SignIn
