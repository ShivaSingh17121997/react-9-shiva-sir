import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { db } from '../firebase';
import { useEffect } from 'react';

export default function Todo() {

    const [login, setLogin] = useState({ email: '', password: '' });

    const [todoData, setTodoData] = useState([]);

    const [editId, setEditId] = useState(null);

    const todoCollection = collection(db, "babaluTodo")

    // add data 
    const handleDAta = async (e) => {
        e.preventDefault();
        if (editId) {
            const editingData = doc(db, "babaluTodo", editId);
            console.log(editingData)

            await updateDoc(editingData, { email: login.email, password: login.password })

            setEditId(null);
            getData()

        } else {

            try {
                await addDoc(todoCollection, { email: login.email, password: login.password })
                getData()
            } catch (error) {
                console.log("someting is wrong")
            }

            setLogin({ email: "", password: "" })
        }

    }


    // get/view Data

    const getData = async () => {
        const todos = await getDocs(todoCollection);
        console.log(todos, "todos")

        setTodoData(todos.docs.map((item) => ({ ...item.data(), id: item.id })));

    }


    useEffect(() => {
        getData();
    }, [])



    console.log(todoData)











    // delete

    const handleDelete = async (id) => {
        const data = doc(db, "babaluTodo", id)

        await deleteDoc(data)


        setTodoData(todoData.filter((item) => item.id !== id));

    }












    // edit data 
    const handleEdit = (item) => {
        setLogin({ email: item.email, password: item.password });
        setEditId(item.id)


    }




















    return (
        <div>
            <form onSubmit={handleDAta} >
                <input value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} type="text" placeholder='Enter todo' />
                <input value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} type="text" placeholder='enter password' />

                <button>{editId ? "Update" : "Add"}</button>

            </form>

            <div>
                {
                    todoData.map((item) => {
                        return <div>
                            <h1>{item.email}</h1>
                            <h1>{item.password}</h1>
                            <button onClick={() => handleDelete(item.id)} >Delete</button>
                            <button onClick={() => handleEdit(item)} >Edit</button>


                        </div>
                    })
                }
            </div>
        </div>

    )
}
