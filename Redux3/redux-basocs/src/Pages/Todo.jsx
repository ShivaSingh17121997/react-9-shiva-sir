import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO, } from '../Redux/ActionTypes';

export default function Todo() {
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState(null);
    const [completed, setCompleted] = useState(false)
    const [category, setCategory ] = useState("")
    const dispatch = useDispatch();

    const todoData = useSelector(store => store.todo)
    console.log(todoData)

    const handleTodo = (e) => {
        e.preventDefault();

        if (edit) {
            axios.patch(`http://localhost:8080/todo/${edit.id}`, {
                todo: input
            })
                .then((res) => {
                    console.log(res)
                    dispatch({ type: UPDATE_TODO, payload: res.data })
                    setInput("")
                    setEdit(null)
                })

        } else {
            axios.post('http://localhost:8080/todo', {
                todo: input,
                status: completed,
                category:category
            })
                .then((res) => {
                    dispatch({ type: ADD_TODO, payload: res.data })
                    setInput("")
                    
                })
        }

    }

    // getting data from db.json

    useEffect(() => {
        axios.get(`http://localhost:8080/todo`)
            .then((res) => {
                console.log(res)
                dispatch({ type: GET_TODO, payload: res.data })
            })
    }, [dispatch]);

    // delete function 

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/todo/${id}`)
            .then((res) => {
                console.log(res, "res")
                dispatch({ type: DELETE_TODO, payload: id })
            })
    }


    // edit function
    const handleEdit = (id) => {
        const isEdited = todoData.find((item) => item.id == id);
        setEdit(isEdited)
        setInput(isEdited.todo);

    }



    console.log(completed)
    console.log(category)


    return (
        <div>
            <h1>Todo app</h1>
            <form onSubmit={handleTodo} >

                <input value={input} onChange={(e) => setInput(e.target.value)} type="text " placeholder='Enter your todo' /> <br/>
                <label >
                <input checked={completed} 
                onChange={(e)=>setCompleted(e.target.checked)}
                type="checkbox" />
                Completed
                </label>
                <br/>

                <select onChange={(e)=>setCategory(e.target.value)}  id="">
                    <option value=""></option>
                    <option value="public">Public</option>
                    <option value="private">Prvate</option>
                    <option value="personal">personal</option>
                </select>

                <br/>

                <button>{edit ? "Update" : "Add"} </button>

            </form>

            <div>
                {todoData.map((item) => {
                    return <div key={item.id}>
                        <h4>{item.todo}</h4>
                        <p>status : {item.status}</p>


                        <button onClick={() => handleEdit(item.id)} >Edit</button>



                        <button onClick={() => handleDelete(item.id)} >Delete</button>
                    </div>
                })}
            </div>

        </div>
    )
}
