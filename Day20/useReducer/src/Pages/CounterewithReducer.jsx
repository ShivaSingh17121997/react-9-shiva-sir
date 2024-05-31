import React, { useReducer } from 'react'

export default function CounterewithReducer() {
    const initialState = { count: 0 }

    const reducer = (state, action) => {
        console.log(state, action)
        switch (action) {
            case "INCREMENT":
                return { ...state, count: state.count + 1 }
            case "DECREMENT":
                return { ...state, count: state.count - 1 }
            case "RESET":
                return { count: 0 }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Counter {state.count} </h1>
            <button onClick={() => dispatch("INCREMENT")} >Increment</button>
            <button onClick={() => dispatch("DECREMENT")} >Decrement</button>
            <button onClick={() => dispatch("RESET")} >Reset</button>
        </div>
    )
}
