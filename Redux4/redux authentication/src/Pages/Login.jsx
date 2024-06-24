import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const StoreData = useSelector((store) => store.todo)

    const navigate = useNavigate()
    console.log(StoreData, 'storedata')

    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = (e) => {
        e.preventDefault();

        axios.post(`https://reqres.in/api/login`, {
            email: email,
            password: password
        })
            .then((res) => {
                if(res.data.token){
                    navigate("/")
                }

                dispatch({ type: "AUTH_TOKEN", payload: res.data.token })
            })
            .catch((error) => console.log("something is wrong", error))

    }




    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin} >

                <input type="texgt" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' /> <br /> <br />


                <input type="text " value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Entere your password' /> <br /><br />


                <button>Submit</button>

            </form>
        </div>
    )
}
