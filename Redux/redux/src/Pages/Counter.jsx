import React from 'react'
import { store } from '../Redux/Store'


export default function Counter() {
    const data = store;
    console.log(data)
    return (
        <div>
            <h1>Counter</h1>

        </div>
    )
}
