import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import db from '../../firebase';

export default function TodoAppFireBase() {

    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    const [editid, setEditid] = useState(null);

    // Ensure the collection name is correct
    const todoCollection = collection(db, "todoDatabase");

    // Create

    const handleTodoAdd = async () => {

        if (editid) {
            const todoDoc = doc(db, 'todoDatabase', editid);
            await updateDoc(todoDoc, { text: input });
            setEditid(null)
            setInput("")
        } else {
            if (input === "") {
                alert("please enter valid input field")
            }
            try {
                // Add todo to the Firestore collection
                await addDoc(todoCollection, { text: input });
                setInput(""); // Clear the input field
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }

        const todoDAta = await getDocs(todoCollection);
        setData(todoDAta.docs.map((item) => ({ ...item.data(), id: doc.id })))

    }

    // Read 

    useEffect(() => {

        const fetchedData = async () => {
            const tododata = await getDocs(todoCollection);
            setData(tododata.docs.map((item) => ({ ...item.data(), id: item.id })))
        }

        fetchedData();

    }, [])

    // delete

    const handleDelete = async (id) => {
        const todoDoc = doc(db, 'todoDatabase', id);
        await deleteDoc(todoDoc);
        setData(data.filter((item) => item.id !== id))
    }

    // Edit function

    const handleEdit = (todo) => {
        setInput(todo.text);
        setEditid(todo.id)


    }






    return (
        <div>
            <div>

                <h1>Todo App With FireBase</h1>
                <input
                    type="text"
                    placeholder='Enter a todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleTodoAdd}>{editid ? "Update" : "Add"}</button>
            </div>

            <div>
                {data.map((item) => {
                    return <div key={item.id}>
                        <h1>{item.text}</h1>
                        <button onClick={() => handleDelete(item.id)} >Delete</button>
                        <button onClick={() => handleEdit(item)} >Edit</button>
                    </div>
                })}
            </div>
        </div>
    )
}
