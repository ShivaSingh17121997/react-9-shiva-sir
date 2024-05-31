import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function TodoWithReducer() {

    const [inputData, setInputData] = useState("");
    const initialState = { todo: [] }

    const reducer = (state, action) => {
        console.log(state, action)

        switch (action) {
            case "TODO_POST":
                return { ...state, state: [...state] }
            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(" http://localhost:3000/todos", {
            inputData
        })
            .then((res) => {
                dispatch({ type: "TODO_POST", payload: res })
            })


    }

    return (
        <div>
            <h1>Todo With Reducer</h1>
            <form onSubmit={handleSubmit} >
                <input value={inputData} onChange={(e) => setInputData(e.target.value)} type="text" placeholder='Enter todo' />
                <button >Add</button>

            </form>
        </div>
    )
}  
