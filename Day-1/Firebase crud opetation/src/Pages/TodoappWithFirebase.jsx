import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import db from '../firebase';

export default function TodoappWithFirebase() {
    const [todo, setTodo] = useState("");
    const [todoData, setTodoData] = useState([]);
    const [todoId, setTodoId] = useState(null);


    const todoCollection = collection(db, "TodoDataStored");



    // Add or update todo
    const handleAddTodo = async () => {
        if (todo === "") {
            alert("Enter a valid todo");
            return;
        }



        
        if (todoId) {
            const todoDoc = doc(db, "TodoDataStored", todoId)
            await updateDoc(todoDoc, { todo })
            setTodoId(null)


        } else {


            await addDoc(todoCollection, { todo });  // add data



        }

        setTodo("");

        // Fetch the updated list of todos
        const data = await getDocs(todoCollection);
        setTodoData(data.docs.map((item) => ({ ...item.data(), id: item.id })));
    };



    // Get todos
    useEffect(() => {
        const fetchTodos = async () => {
        
            const data = await getDocs(todoCollection)
            setTodoData(data.docs.map((item) => ({ ...item.data(), id: item.id })))
        };

        fetchTodos();
    }, []);

    // // Delete
    // const handleDelete = async (id) => {
    //     const todoDoc = doc(db, 'TodoDataStored', id);
    //     await deleteDoc(todoDoc);
    //     setTodoData(todoData.filter((item) => item.id !== id));
    // };




    // delete fun

    const handleDelete = async (id) => {

        const deleteData = doc(db, "TodoDataStored", id);
        await deleteDoc(deleteData);

        setTodoData(todoData.filter((item) => item.id !== id))

    }










    // edit

    const handleEdit = (item) => {
        setTodo(item.todo)
        setTodoId(item.id)


    }










  

    console.log(todoId, todo);

    return (
        <div>
            <h1>Todo app</h1>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Enter a todo' />
            <button onClick={handleAddTodo}>{todoId ? "Update" : "Add"}</button>

            <div>
                {todoData.map((item) => (
                    <div key={item.id}>
                        <h4>{item.todo}</h4>

                        


                        <button onClick={() => handleDelete(item.id)} >Delete</button>


                        <button onClick={() => handleEdit(item)} >Edit</button>




                       


                    </div>
                ))}
            </div>
        </div>
    );
}
