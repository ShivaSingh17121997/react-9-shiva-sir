import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [Product, setProduct] = useState([]);
    const [edit, setEdit] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8080/posts`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            });
    }, []);

    // handle Edit
    const handleEdit = (id) => {
        const EditedItem = Product.find((item) => item.id === id);
        setEdit(EditedItem);
    };

    // update function 
    const handleUpdate = () => {
        fetch(`http://localhost:8080/posts/${edit.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: edit.title
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Data updated successfully");
            // Show success notification
            toast.success("Data updated successfully", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // Update Product state with updated data
            setProduct(prevProduct => {
                const updatedProduct = prevProduct.map(item => {
                    if (item.id === edit.id) {
                        return { ...item, title: edit.title };
                    }
                    return item;
                });
                return updatedProduct;
            });
            // Set update success to true
            setUpdateSuccess(true);
        })
        .catch((err) => {
            console.log("error");
            // Show error notification
            toast.error("Error updating data", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div>
                    {Product.map((item, i) => (
                        <div key={i}>
                            <h1>{item.id}</h1>
                            <h1>{item.title}</h1>
                            <button onClick={() => handleEdit(item.id)}>Edit</button>
                        </div>
                    ))}
                </div>
                <div>
                    {edit && (
                        <div>
                            <input
                                value={edit.title}
                                onChange={(e) => setEdit({ ...edit, title: e.target.value })}
                                type="text "
                                placeholder='Update data'
                                className={updateSuccess ? {border:"green"} : ""}
                            />
                            <button onClick={handleUpdate}>Update</button>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
