import React, { act, useEffect, useReducer } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function TodoListWithReducer() {

    const [inputData, setInputData] = useState("")

    const initialState = { todo: [] }



    const reducer = (state, action) => {
        // console.log(action, state)
        switch (action.type) {
            case "TODO_POST":
                return { ...state, todo: [...state.todo, action.payload] }

            case "GET_TODO":
                return { ...state, todo: action.payload }

            case "DELETE_TODO":
                return { ...state, todo: state.todo.filter((item) => item.id !== action.payload) }

            default:
                return state

        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)


    console.log(state.todo)



    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:3000/todos", {
                todo: inputData
            })
                .then((res) => {
                    console.log(res.data)
                    dispatch({ type: "TODO_POST", payload: res.data })
                    setInputData("")
                })

        } catch (error) {
            console.log("something is wrong")

        }

    }

    //
    useEffect(() => {
        try {
            axios.get("http://localhost:3000/todos")
                .then((res) => {
                    console.log(res.data)
                    dispatch({ type: "GET_TODO", payload: res.data })
                })

        } catch (error) {

        }
    }, [])


    // handle delete
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/todos/${id}`)
        dispatch({ type: "DELETE_TODO", payload: id })
    }

    return (
        <div>
            <h1>Todo List With Reducer</h1>
            <form onSubmit={handleSubmit} >
                <input value={inputData} onChange={(e) => setInputData(e.target.value)} type="text" placeholder='Enter your todo here' />
                <button>Add</button>
            </form>

            <div>
                {
                    state.todo.map((item) => {
                        return <div key={item.id}>
                            <h3>{item.todo}</h3>
                            <button onClick={() => handleDelete(item.id)} >  Delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
