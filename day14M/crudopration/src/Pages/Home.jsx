import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    // console.log(input)


    useEffect(() => {
        fetch(`http://localhost:8080/product?q=${input}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
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




    return (
        <div>
            <input value={input} type="text" onChange={(e) => setInput(e.target.value)} />

            <div>
                {
                    data.map((item) => {
                        return <div>
                            <img width="300px" src={item.image} alt="" />
                            <h1>{item.title}</h1>
                            <p>{item.price}</p>
                            <p>{item.category}</p>
                            <button onClick={() => handleDelete(item.id)} >Delete</button>
                        </div>
                    })
                }
            </div>



        </div>
    )
}
