import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`https://reqres.in/api/login`, {
            email, password
        })
            .then((res) => dispatch({ type: "LOGIN_TOKEN", payload: (res.data.token) }))


        // .then((error) => console.log("someting is wrong"))
    }

    return (
        <div>
            <form onSubmit={handleLogin} >

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter password' />
                <button  >Submit</button>

            </form>
        </div>
    )
}
