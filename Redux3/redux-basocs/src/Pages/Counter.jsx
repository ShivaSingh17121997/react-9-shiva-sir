import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {

    const data = useSelector((store) => store.count)
    const dispatch = useDispatch()
    // console.log(data)

    const handleIncrease = () => {
        dispatch({ type: "INCREMENT" })
    }

    const handleDecrease = () => {
        dispatch({ type: "DECREMENT" })
    }

    return (
        <div>
            <h1>counter with Redux : {data}</h1>
            <button onClick={handleIncrease}>Increment</button>
            <button onClick={handleDecrease}>Decrement</button>
        </div>
    )
}
