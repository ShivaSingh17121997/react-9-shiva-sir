import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");


    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        let email = localStorage.getItem('email')
        let password = localStorage.getItem('password')

        if (LoginEmail === email && LoginPassword === password) {
            alert("Login Successful")
            navigate("/")
        } else {
            alert("Invalid details")
        }

    }

    console.log("hello")

    return (
        <div>

            <form onSubmit={handleLogin} >
                <input value={LoginEmail} onChange={(e) => setLoginEmail(e.target.value)} type="text" placeholder='Enter Email' /> <br /> <br />

                <input value={LoginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="text" placeholder='Enter Password' /><br /> <br />

                <button type='submit' > Login</button>
            </form>

        </div>
    )
}
