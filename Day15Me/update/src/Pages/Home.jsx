import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {
    const [product, setProduct] = useState([]);
    const [edit, setEdit] = useState(null)


    useEffect(() => {
        fetch(`http://localhost:8080/posts`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            });
    }, []);

    // edit function 
    const handleEdit = (id) => {
        let isEdited = product.find((item) => item.id === id);
        setEdit(isEdited)
    }
    console.log(edit, "edit")

    // update

    const handleUpdate = () => {

        fetch(`http://localhost:8080/posts/${edit.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: edit.title })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                toast.success("Data updated successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            })

       

    }

    const notify = () => toast("oh my god")


    return (
        <div>
            <button onClick={notify} >notification</button>
            <div style={{ display: "flex", justifySelf: "space-evenly" }} >
                <div>
                    {
                        product.map((item, i) => {
                            return <div key={i} >
                                <h1>{item.id}</h1>
                                <h1>{item.title}</h1>
                                <button onClick={() => handleEdit(item.id)} >Edit</button>
                            </div>
                        })
                    }
                </div>

                <div>
                    {edit && <div>

                        <input value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} type="text " placeholder='UPdate data' />
                        <button onClick={handleUpdate} >Update</button>
                    </div>}
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}
