import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const handleSignup = (e) => {
        e.preventDefault()
        console.log(email, password)

        fetch("https://reqres.in/api/", {
            method: "POST"
        })
            .then((res) => res.json())
            .then((data) => console.log(data))


        setEmail("")
        setPassword("")

        navigate("/login")
    }


    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSignup} >
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' type="text" /> <br /><br />

                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' type="text" /><br /><br />

                <button type='submit' >Signup</button>
            </form>
        </div>
    )
}
