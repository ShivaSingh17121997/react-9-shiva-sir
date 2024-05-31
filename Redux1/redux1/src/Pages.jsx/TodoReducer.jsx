import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'

export default function TodoReducer() {
    const [todoInput, setTodoInput] = useState("");


    const initialState = { todo: [] }

    const reducer = (state, action) => {
        console.log(action, "{action}")
        switch (action.type) {
            case "ADD_TODO":
                return { ...state, todo: [...state.todo, action.payload] }
            case "SET_TODOS":
                return { ...state, todo: action.payload }
            case "TODO_DELETE":
                return { ...state, todo: state.todo.filter((item) => item.id !== action.payload) }
            default:
                return state
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/todos", {
            todo: todoInput
        })
            .then((res) => {
                dispatch({ type: "ADD_TODO", payload: res.data })
            })
    }


    // fetch the data

    useEffect(() => {
        axios.get('http://localhost:8080/todos')
            .then((res) => {
                dispatch({ type: "SET_TODOS", payload: res.data })
            })
    }, [])

    // delete function 
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/todos/${id}`)
            .then((res) => {
                dispatch({ type: "TODO_DELETE", payload: id })
            })

    }


    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} type="text" />
                <button  >Add</button>
            </form>

            <div>
                {
                    state.todo.map((item) => {
                        return <div>
                            <h1>{item.todo}</h1>
                            <button onClick={() => handleDelete(item.id)} >Delete</button>
                        </div>
                    })
                }
            </div>

        </div >
    )
}
