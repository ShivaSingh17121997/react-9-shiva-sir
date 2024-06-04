import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function TodoWithReducer() {

    const [inputData, setInputData] = useState("");
    const initialState = { todo: [] }

    const reducer = (state, action) => { // pure function
        console.log(action)

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


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/todos", {

            todo: inputData
        })
            .then((res) => {
                dispatch({ type: "TODO_POST", payload: res.data })
                setInputData("")
            })
    }


    // Fetching data form db.json
    useEffect(() => {
        try {
            axios.get("http://localhost:3000/todos")
                .then((res) => {
                    console.log(res.data)
                    dispatch({ type: "GET_TODO", payload: res.data })
                })
        } catch (error) {
            console.log("something is wrong")
        }

    }, [])

    // delete

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/todos/${id}`)
            .then((res) => {
                dispatch({ type: "DELETE_TODO", payload: id })
            })

    }


    return (
        <div>
            <h1>Todo With Reducer</h1>
            <form onSubmit={handleSubmit} >
                <input value={inputData} onChange={(e) => setInputData(e.target.value)} type="text" placeholder='Enter todo' />
                <button >Add</button>

            </form>


            <div>
                {
                    state.todo.map((item, i) => {
                        return <div key={i} >
                            <h3>{item.todo}</h3>
                            <button onClick={() => handleDelete(item.id)} >Delete</button>
                        </div>
                    })
                }
            </div>

        </div >
    )
}





//  action (dispatch) ===> reducer(pure function) ===>  update the state(redux store) ==> ui

// ARS


