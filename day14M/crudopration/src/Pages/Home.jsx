import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [DataFilter, setDataFilter] = useState([]);
    const [category, setCategory] = useState("electronics")



    // const [edit, setEdit] = useState(null)


    useEffect(() => {
        fetch(`http://localhost:8080/product?q=${input}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                // setDataFilter(data)
                // setOriginalData(data);
                console.log(data);
            });
    }, [input]);




    // delete function

    const handleDelete = (id) => {

        const deleted = data.filter((item) => item.id !== id)
        setData(deleted);

        fetch(`http://localhost:8080/product/${id}`, {
            method: "DELETE"
        })
            .then((res) => alert("data deleted successfully"))

    }


    // // Handle Edit
    // const handleEdit = (id) => {
    //     const editedData = data.find((item) => item.id == id)
    //     setEdit(editedData)
    //     console.log(editedData);

    // }


    // update function 
    const hndleUpdata = () => {
        fetch(`http://localhost:8080/product/${edit.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: edit.title,
                price: edit.price,
                category: edit.category

            })
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }


    // update categotry

    useEffect(() => {
        if (category !== "") {
            const filtereData = DataFilter.filter((item) => item.category === category)
            setData(filtereData)
        } else {
            setData(DataFilter)
        }


    }, [category, DataFilter])





    ///
    const handleFilter = (category) => {
        setCategory(category)
    }
    console.log(category)

    return (
        <div >
            <div>
                <input value={input} type="text" onChange={(e) => setInput(e.target.value)} />
            </div>

            <div>
                <button onClick={() => handleFilter("electronics")} >Electronics</button>
                <button onClick={() => handleFilter("jewelery")} >jewelery</button>
                <button onClick={() => handleFilter("")}>Reset</button>
            </div>


            <div style={{ display: 'flex', justifyContent: "space-evenly" }} >

                <div>
                    {
                        data.map((item) => {
                            return <div key={item.id} >
                                <img width="200px" height="150px" src={item.image} alt="" />
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <p>{item.category}</p>
                                <button onClick={() => handleEdit(item.id)} >Edit</button>
                                {/* <button onClick={() => handleDelete(item.id)} >Delete</button> */}
                            </div>
                        })
                    }
                </div>

                {/* <div>
                    {edit && (
                        <div>
                            <img width="100px" height="150px" src={edit.image} alt="" /><br />
                            <input
                                value={edit.title}
                                onChange={(e) => setEdit({ ...edit, title: e.target.value })}
                                type="text"
                            />
                            <br /><br />
                            <input
                                value={edit.price}
                                onChange={(e) => setEdit({ ...edit, price: e.target.value })}
                                type="text"
                            />
                            <br /><br />
                            <input
                                value={edit.category}
                                onChange={(e) => setEdit({ ...edit, category: e.target.value })}
                                type="text"
                            /><br /><br />
                            <button onClick={handleUpdata} >Update</button>
                        </div>
                    )}
                </div>
 */}

            </div>




        </div>
    )
}
