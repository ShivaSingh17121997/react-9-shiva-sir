import React from 'react'
import { useReducer } from 'react'

export default function CounterWithReducer() {

    const initialState = { count: 0 } // inital state

    const reducer = (state, action) => {
        console.log(state, action)
        switch (action) {

            case "INCREMENT":
                return { ...state, count: state.count + 1 }
            case "DECREMENT":
                return { ...state, count: state.count - 1 }
            case "RESET":
                return { count: 0 }

            default:
                return state;

        }


    }

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <h1>CounterWithReducer : {state.count} </h1>

            <button onClick={() => dispatch("INCREMENT")} >   Increment</button>
            <button onClick={() => dispatch("DECREMENT")} >Decrement</button>
            <button onClick={() => dispatch("RESET")} >Reset</button>


        </div>
    )
}


// event ==> dispatch(action) == > reducer (pure function ) => state updted ==> updated value showdd on ui