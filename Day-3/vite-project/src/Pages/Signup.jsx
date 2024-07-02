import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";


import { auth } from '../firebase';


export default function Signup() {
    // const auth = getAuth();
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSignup = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                // ..
            })
    }

    return (
        <div>
            <form onSubmit={handleSignup} >
                <input placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" /> <br /><br />

                <input placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} type="text" /> <br /><br />


                <button>Signup</button>
            </form>
        </div>
    )
}
