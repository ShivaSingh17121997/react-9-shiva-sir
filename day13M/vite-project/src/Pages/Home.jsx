import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, email, password }),
        })
            .then((data) => {
                console.log(data)
                alert("data added successfully")
                setUserName("")
                setEmail("")
                setPassword("")

            })
            .catch((err) => console.log(err))

    }


    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setUsers(data)

            })
    }, [])

    return (
        <div>

            <form onSubmit={handleSubmit} >
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='User Name' /> <br /><br />

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email' /><br /><br />

                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter password' /><br /><br />

                <input type="submit" />

            </form>

            <div>
                {
                    users.map((item, i) => {
                        return <>
                            <div key={i} >
                                <h1>{item.id}</h1>
                                <h2>{item.userName}</h2>
                                <h3>{item.email}</h3>
                            </div>
                        </>
                    })
                }
            </div>


        </div>

    )
}
