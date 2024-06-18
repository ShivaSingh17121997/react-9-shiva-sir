import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from '../Redux/ActionTypes';

export default function Todo() {
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState(null);
    const [completed, setCompleted] = useState(false);
    const [category, setCategory] = useState("");
    const [filter, setFilter] = useState(""); // State for filtering todos

    const dispatch = useDispatch();
    const todoData = useSelector(store => store.todo);

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

    useEffect(() => {
        axios.get(`http://localhost:8080/todo`)
            .then((res) => {
                dispatch({ type: GET_TODO, payload: res.data });
            })
            .catch(err => console.error(err));
    }, [dispatch]);

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
        setInput(isEdited.todo);
        setCompleted(isEdited.status);
        setCategory(isEdited.category);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    // Filter the todos based on the selected filter
    const filteredTodos = filter ? todoData.filter(todo => todo.category === filter) : todoData;

    console.log(filter)

    return (
        <div>
            <h1>Todo app</h1>
            <form onSubmit={handleTodo}>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter your todo' /> <br />
                <label>
                    <input
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                        type="checkbox"
                    />
                    Completed
                </label>
                <br />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="personal">Personal</option>
                </select>
                <br />
                <button>{edit ? "Update" : "Add"}</button>
            </form>

            <div>
                <label>
                    <input type="radio" value="" name="filter" checked={filter === ""} onChange={handleFilterChange} />
                    All
                </label>
                <label>
                    <input type="radio" value="public" name="filter" checked={filter === "public"} onChange={handleFilterChange} />
                    Public
                </label>
                <label>
                    <input type="radio" value="private" name="filter" checked={filter === "private"} onChange={handleFilterChange} />
                    Private
                </label>
                <label>
                    <input type="radio" value="personal" name="filter" checked={filter === "personal"} onChange={handleFilterChange} />
                    Personal
                </label>
            </div>

            <div>
                {filteredTodos.map((item) => {
                    return (
                        <div key={item.id}>
                            <h4>{item.todo}</h4>
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
