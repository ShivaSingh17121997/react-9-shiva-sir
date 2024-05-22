import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../ContextProvider/AuthContextProvidr'

export default function Signup() {
  const { Login, Logout } = useContext(AuthContext)


  const [Loginemail, setLoginEmail] = useState("")
  const [Loginpassword, setLoginPassword] = useState("")

  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(Loginemail, password)

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: Loginemail,
        password: Loginpassword
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        Login(data.token)

        if (data.token) {
          navigate("/")
        }
      })

    // let userLoginEmail = localStorage.getItem("email")
    // let userLoginPassword = localStorage.getItem("password")

    // if (Loginemail === userLoginEmail && Loginpassword === userLoginPassword) {
    //   alert("khusiya manao login ho gaye")
    //   navigate("/")

    // } else {
    //   alert("kuch to gadbad hai")
    // }



  }

  // console.log(Login, token)


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} >
        <input value={Loginemail} onChange={(e) => setLoginEmail(e.target.value)} placeholder='Enter Email' type="text" /> <br /><br />

        <input value={Loginpassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder='Enter Password' type="text" /><br /><br />

        <button type='submit' >Login</button>
      </form>
    </div>
  )
}
