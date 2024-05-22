import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AuthProvidere from '../Contexts/AuthProvider';

export default function Login() {

    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");

    const {login, isAuth} = useContext(AuthProvidere)

    console.log(isAuth, "form login")

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify({
                email: LoginEmail,
                password: LoginPassword
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.token)
                login(data.token)
            })
            .catch((error) => {
                console.log("something is wrong")
            })




    }


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
