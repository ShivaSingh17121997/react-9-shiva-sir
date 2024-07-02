import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import { auth } from '../firebase';


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // signin with popup

    const handleGoogleauthWithPopup = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token)
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
















    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("login successfull", user.accessToken)

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
            <form onSubmit={handleLogin} >
                <input placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" /> <br /><br />

                <input placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} type="text" /> <br /><br />

                <button>Login</button>
            </form>



            <div>
                <button onClick={handleGoogleauthWithPopup} >

                    Login with google
                </button>

            </div>




        </div>
    )
}
