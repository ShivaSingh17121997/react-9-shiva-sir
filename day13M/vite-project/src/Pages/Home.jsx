import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [products, setProduct] = useState([]);

    const [edit, setEdit] = useState(null)



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

    //
    // const handleDelete = (id) => {
    //     const deletedData = products.filter((item) => item.id != id)
    //     setProduct(deletedData)

    //     fetch(`http://localhost:8080/users/${id}`,{
    //         method:"DELETE"
    //     })
    //     .then((res)=> console.log("Product deleted fro server") )

    // }

    useEffect(() => {
        fetch("http://localhost:8080/users?_sort=1&&_order=desc")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data)

            })
    }, [])


    // sorting functionality 
    const handleAsc = () => {
        console.log("clicked sort")
        const AscData = [...products].sort((a, b) => a.price - b.price);
        setProduct(AscData)
    }

    const handleDesc = () => {
        const desscData = [...products].sort((a, b) => b.price - a.price);
        setProduct(desscData)

    }

    // handleDelete


    // handle Delete
    const handleEdit = (id) => {
        const productToEdit = products.find((item) => item.id === id);
        setEdit(productToEdit)
    }


    // handle Edit update
    const handleUpdata = () => {
        fetch(`http://localhost:8080/users/${edit.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProduct),
        })
            .then((res) => {
                console.log("product update successfully")
                setEdit(null)
            })
    }

    const MemoizedFunction = useCallback(() => handleUpdata(), [])





    return (
        <div>
            {/* crating form for posting data of users */}
            <form onSubmit={handleSubmit} >
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='User Name' /> <br /><br />

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email' /><br /><br />

                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter password' /><br /><br />

                <input type="submit" />

            </form>

            {/* sort  button */}
            <div>
                <button onClick={handleDesc} >Descendign Order</button>
                <button onClick={handleAsc} >Ascending Order</button>
            </div>


            <div>
                {
                    products.map((item, i) => {
                        return <div>
                            <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }} key={i} >
                                <img src={item.images[0]} alt="" />
                                <h1>{item.id}</h1>
                                <h2>Name :{item.title}</h2>
                                <h3>Price :{item.price}</h3>
                                <button conClick={() => handleEdit(id)} >Edit</button>
                            </div>
                        </div>
                    })
                }
            </div>


            <div>
                {
                    edit && (
                        <div>
                            <input value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.validationMessage })} type="text" />
                            <br />

                            <input value={edit.price} onChange={(e) => setEdit({ ...edit, price: e.target.validationMessage })} type="text" />
                            <br />
                            <button onClick={handleUpdata} >Save</button>
                        </div>
                    )
                }
            </div>


        </div>

    )
}
