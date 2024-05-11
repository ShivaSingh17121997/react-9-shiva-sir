



import React from 'react'
import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()
        let errObj = {};

        if (!name) {
            errObj.name = "Name is required!"
        } else if (!email) {
            errObj.email = "Email is required"
        }

        if (Object.keys(errObj).length === 0) {
            setError(errObj)
            console.log("click")
        } else {
            console.log(name,"name", email,"email")
            setName("")
            setEmail("")
            setError({})
        }
        console.log(name)
    }
    console.log(Object.keys(error).length)

    console.log(name, email)
    console.log(error, "error")

    return (
        <div>
            <h1>Form validation</h1>

            <form onSubmit={handleSubmit} >
                <div>
                    <div>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='User name' />
                        {error.name && <span style={{ color: "red" }} >{error.name}</span>}
                    </div>

                    <div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' />
                        {error.email && <span style={{ color: "red" }} >{error.email}</span>}

                    </div>

                    <br />

                    <button type='submit' > Submit </button>
                </div>

            </form>

        </div>
    )
}
