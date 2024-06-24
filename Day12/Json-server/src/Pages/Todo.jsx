import React, { useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import { useEffect } from 'react';

export default function Todo() {
    const [FName, setFname] = useState("");
    const [LName, setLName] = useState("");
    const [message, setMessage] = useState("");

    const [val, setVal] = useState([]);

    const value = collection(db, "TodoDataBase");

    const handleTodo = async () => {
        if (FName.trim() === "" || LName.trim() === "") {
            setMessage("First Name and Last Name cannot be empty");
            return;
        }

        try {
            await addDoc(value, { FName, LName });
            setMessage("Document successfully added!");
            setFname("");
            setLName("");
        } catch (error) {
            console.error("Error adding document: ", error);
            setMessage("Error adding document. Please try again.");
        }
    };

    // GETDATA
    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value)
            setVal(dbVal.docs.map((item) => ({ ...item, id: item.id })))
        }
        getData();

    })

    // Delete functionality
    const handleDelete = async (id) => {
        const deleteVal = doc(database, "TodoDataBase", id);
        await deleteDoc(deleteVal)
    }





    return (
        <>
            <div>
                <input
                    type="text"
                    value={FName}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    value={LName}
                    onChange={(e) => setLName(e.target.value)}
                    placeholder="Last Name"
                />
                <button onClick={handleTodo}>Submit</button>
                {message && <p>{message}</p>}
            </div>

            <div>
                {val.map((item, i) => {
                    return <div key={i + 1}>
                        <h1>{item.FName}</h1>
                        <h1>{item.LName}</h1>
                        <button onClick={() => handleDelete(item.id)} >Delete</button>
                    </div>
                })}

            </div>

        </>
    );
}
