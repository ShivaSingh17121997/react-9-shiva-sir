import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from '../Redux/ActionTypes';
import { getTodo } from '../Redux/Actionl';

export default function Todo() {
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState(null);
    const [completed, setCompleted] = useState(false);
    const [category, setCategory] = useState("");
    const [filter, setFilter] = useState("");

    const dispatch = useDispatch();

    const todoData = useSelector(store => store.todo); // array of object

    const handleTodo = (e) => {
        e.preventDefault();

        if (edit) {
            axios.patch(`http://localhost:8080/todo/${edit.id}`, {
                todo: input,
                status: completed,
                category: category
            })
                .then((res) => {
                    dispatch({ type: UPDATE_TODO, payload: res.data });
                    setInput("");
                    setEdit(null);
                    setCompleted(false);
                    setCategory("");
                })
                .catch(err => console.error(err));
        } else {
            axios.post('http://localhost:8080/todo', {
                todo: input,
                status: completed,
                category: category
            })
                .then((res) => {
                    dispatch({ type: ADD_TODO, payload: res.data });
                    setInput("");
                    setCompleted(false);
                    setCategory("");
                })
                .catch(err => console.error(err));
        }
    };

















    // getdodo
   

    useEffect(() => {
        // getTodo(dispatch)
        dispatch(getTodo)


    }, [dispatch]);






























    // handle delete

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/todo/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_TODO, payload: id });
            })
            .catch(err => console.error(err));
    };



    const handleEdit = (id) => {
        const isEdited = todoData.find((item) => item.id === id);
        setEdit(isEdited);
        setInput(isEdited.todo || "");
        setCompleted(isEdited.status || false);
        setCategory(isEdited.category || "");
    };



    // filter function 

    const filteredData = filter ? todoData.filter((item) => item.category === filter) : todoData;


    console.log(filter)





    return (
        <div>
            <h1>Todo app</h1>
            <form onSubmit={handleTodo}>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter your todo' />
                <label>
                    <input
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                        type="checkbox"
                    />
                    Completed
                </label>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="personal">Personal</option>
                </select>

                <button>{edit ? "Update" : "Add"}</button>
            </form>

            <div>
                <label>
                    <input type="radio" name="filter" value="" checked={filter === ""} onChange={(e) => setFilter(e.target.value)} />
                    All
                </label>

                <label>
                    <input type="radio" name="filter" value="public" checked={filter === "public"} onChange={(e) => setFilter(e.target.value)} />
                    Public
                </label>
                <label>
                    <input type="radio" name="filter" value="private" checked={filter === "private"} onChange={(e) => setFilter(e.target.value)} />
                    Private
                </label>
                <label>
                    <input type="radio" name="filter" value="personal" checked={filter === "personal"} onChange={(e) => setFilter(e.target.value)} />
                    Personal
                </label>
            </div>

            <div>
                {filteredData.map((item) => {
                    return (
                        <div key={item.id}  >
                            <h4 style={{ textDecoration: item.status ? 'line-through' : 'none', color: item.status ? "#ff9ea1" : "green" }}>{item.todo}</h4>
                            <p>Status: {item.status ? "Completed" : "Incomplete"}</p>
                            <p>Category: {item.category}</p>

                            <button onClick={() => handleEdit(item.id)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}
