import React, { useEffect, useState } from 'react';

export default function Home() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [edit] = useState("");
    const [filterData, setFilterData] = useState([]);

    const data = {
        userName,
        email,
        password
    };

    const handleForm = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(() => {
            alert("Data added successfully");
            setUserName("");
            setEmail("");
            setPassword("");
        })
        .catch(() => {
            console.log("Something went wrong while adding data");
        });
    };

    useEffect(() => {
        fetch(`http://localhost:8090/users?q=${search}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch(() => {
                console.log("Something went wrong while fetching data");
            });
    }, [search]);

    const handleAsc = () => {
        const sortedAscData = [...users].sort((a, b) => a.price - b.price);
        setUsers(sortedAscData);
    };

    const handleDesc = () => {
        const sortedDescData = [...users].sort((a, b) => b.price - a.price);
        setUsers(sortedDescData);
    };

    const handleEdit = (id) => {
        console.log("handleEdit");
        const productToEdit = users.find((item) => item.id === id);
        setEdit(productToEdit);
    };

    const handleUpdate = () => {
        console.log("handleUpdate");
        fetch(`http://localhost:8090/users/${edit.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(edit),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Product updated successfully:", data);
            setEdit(null);
        })
        .catch((error) => {
            console.error("Error updating product:", error);
        });
    };

    const handleDelete = (id) => {
        console.log(id, "id")
        const deletedData = users.filter((item) => item.id !== id)
        setUsers(deletedData)

        fetch(`http://localhost:8090/users/${id}`, {
            method: "DELETE"
        })
        .then((res) => console.log('data deleted successfully'))
    }

    const handleFilter = (category) => {
        const filteredData = users.filter((item) => item.title.toLowerCase().includes(category.toLowerCase()));
        setFilterData(filteredData);
    };

    return (
        <div>
            <form onSubmit={handleForm}>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='User Name' /><br /><br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' /><br /><br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' /><br /><br />
                <input type="submit" />
            </form>

            <div>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search...' />
            </div>

            <div>
                <button onClick={handleAsc}>Asc</button>
                <button onClick={handleDesc}>Desc</button>
            </div>

            <div>
                <button onClick={() => handleFilter("smartphones")}> Filter by smartphones </button>
                <button onClick={() => handleFilter("fragrances")}> Filter by Fragrances</button>
            </div>

            <div>
                {filterData.length > 0 ? (
                    filterData.map((item) => (
                        <div key={item.id}>
                            <img src={item.images[1]} alt="" />
                            <h1>{item.id}</h1>
                            <h2>{item.title}</h2>
                            <h3>{item.brand}</h3>
                            <p>Price : {item.price}</p>
                            <button onClick={() => handleDelete(item.id)} >Delete</button>
                        </div>
                    ))
                ) : (
                    users.map((item) => (
                        <div key={item.id}>
                            <img src={item.images[1]} alt="" />
                            <h1>{item.id}</h1>
                            <h2>{item.title}</h2>
                            <h3>{item.brand}</h3>
                            <p>Price : {item.price}</p>
                            <button onClick={() => handleDelete(item.id)} >Delete</button>
                        </div>
                    ))
                )}
            </div>

            <div>
                {edit && <div>
                    <input
                        type="text"
                        value={edit.title} // Populate input with email
                        onChange={(e) => setEdit({ ...edit, title: e.target.value })}
                        placeholder="Email"
                    /><br /> <br />


                    <input
                        type="text"
                        value={edit.brand} // Populate input with password
                        onChange={(e) => setEdit({ ...edit, brand: e.target.value })}
                        placeholder="Password"
                    /><br /><br />
                    <button onClick={handleUpdate} >Update</button>
                </div>}
            </div>
        </div>
    )
}
