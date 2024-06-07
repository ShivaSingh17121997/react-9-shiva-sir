import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';

const initialState = { todos: [], currentTodo: null, editMode: false };

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.payload };
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'SET_TODO_FOR_EDIT':
            return { ...state, currentTodo: action.payload, editMode: true };
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
                currentTodo: null,
                editMode: false
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
};

export default function UpdateTodo() {
    const [todoInput, setTodoInput] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('http://localhost:8080/todos')
            .then((res) => {
                dispatch({ type: 'SET_TODOS', payload: res.data });
            })
            .catch((err) => console.error('Error fetching todos:', err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state.editMode) {
            axios.put(`http://localhost:8080/todos/${state.currentTodo.id}`, {
                todo: todoInput
            })
                .then((res) => {
                    dispatch({ type: "UPDATE_TODO", payload: res.data });
                    setTodoInput('');
                })
                .catch((err) => console.error('Error updating todo:', err));
        } else {
            axios.post('http://localhost:8080/todos', { todo: todoInput })
                .then((res) => {
                    dispatch({ type: "ADD_TODO", payload: res.data });
                    setTodoInput('');
                })
                .catch((err) => console.error('Error adding todo:', err));
        }
    };


   // edit
    const handleEdit = (todo) => {
        setTodoInput(todo.todo);
        dispatch({ type: 'SET_TODO_FOR_EDIT', payload: todo });
    };

    //delete

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/todos/${id}`)
            .then(() => {
                dispatch({ type: 'DELETE_TODO', payload: id });
            })
            .catch((err) => console.error('Error deleting todo:', err));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} type="text" />
                <button type="submit">{state.editMode ? 'Update Todo' : 'Add Todo'}</button>
            </form>
            <ul>
                {state.todos.map(todo => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleEdit(todo)}>Edit</button>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
