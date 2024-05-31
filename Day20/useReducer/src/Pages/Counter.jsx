import React from 'react'
import { useReducer } from 'react'

export default function Counter() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 }
            case "DECREMENT":
                return { count: state.count - 1 }
            case "RESET":
                return { count: 0 }
            default:
                return state
        }

    }

    const initialState = { count: 0 }

    const [state, dispatch] = useReducer(reducer, initialState)

    return <div>
        <h1>Counter:{state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })} >Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })} >decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })} >Reset</button>

    </div>
}
