import React, { useEffect, useState } from 'react'



export default function Home() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = useState([])


    const data = {
        userName,
        email,
        password
    }

    const handleForm = (e) => {
        e.preventDefault();


        fetch("http://localhost:8080/users", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then((data) => {

                alert("data is added successfully")
                console.log(data)
                setUserName("")
                setEmail("")
                setPassword("")
            })
            .catch((err) => console.log("sometning is wrong"))


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

            <form onSubmit={handleForm} >
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text  " placeholder='User Name' /> <br /><br />


                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' /> <br /><br />


                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' /> <br /><br />


                <input type="submit" />
            </form>

            <div>
                {
                    users.map((item, i) => {
                        return <div>
                            <h1>{item.id}</h1>
                            <h2>{item.userName}</h2>
                            <p>{item.email}</p>
                        </div>
                    })
                }
            </div>

        </div>
    )


}
