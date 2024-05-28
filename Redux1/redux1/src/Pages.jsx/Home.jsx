import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchAdd, dispatchReduce } from '../Redux/Action';

export default function Home() {
    const data = useSelector((store) => store.counter);
    const dispatch = useDispatch()
    console.log(data)

    const handleAdd = () => {
        dispatch(dispatchAdd(1))
    }

    const handleReduce = () => {
        dispatch(dispatchReduce(1))
    }


    return (
        <div>
            <h1>Counter : {data}</h1>
            <button onClick={handleReduce}  >-</button>
            <button></button>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}
