import React, { useEffect, useState } from 'react'



export default function Home() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("")


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
        fetch(`http://localhost:8090/users?q=${search}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setUsers(data)
            })
    }, [search])

    // soting functionality

    const handleAsc = () => {
        const sortedAscData = users.sort((a, b) => a.price - b.price)
        setUsers([...users], sortedAscData)
    }



    const handleDesc = () => {
        const sortedDescData = users.sort((a, b) => b.price - a.price)
        setUsers([...users], sortedDescData)
    }

    // searching functionality

    // console.log(search)
    // const handleSearch = (e) => {
    //     setSearch(search)
    // }




    return (
        <div>

            <form onSubmit={handleForm} >
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text  " placeholder='User Name' /> <br /><br />


                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' /> <br /><br />


                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' /> <br /><br />


                <input type="submit" />
            </form>

            <div>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text " placeholder='Search...' />
            </div>

            {/* Creatting button for sorting */}
            <div>
                <button onClick={handleAsc} >Asc</button>
                <button onClick={handleDesc} >Desc</button>
            </div>


            <div>
                {
                    users.map((item, i) => {
                        return <div>
                            <img src={item.images[1]} alt="" />
                            <h1>{item.id}</h1>
                            <h2>{item.title}</h2>
                            <h3>{item.brand}</h3>
                            <p>Price : {item.price}</p>

                        </div>
                    })
                }
            </div>

        </div>
    )


}
