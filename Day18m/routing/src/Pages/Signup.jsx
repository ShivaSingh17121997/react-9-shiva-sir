import React from 'react'
import { useState } from 'react'

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(email, password)
        localStorage.setItem("email", email);
        localStorage.setItem("password", password)

        setEmail("");
        setPassword("");

    }

    return (
        <div>

            <form onSubmit={handleSignup} >
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email' /> <br /> <br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter Password' /><br /> <br />

                <button>signup</button>
            </form>

        </div>
    )
}
