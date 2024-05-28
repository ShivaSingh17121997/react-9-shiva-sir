// Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD, REDUCE } from '../Redux/ActionType';
import { AddAction, ReduceAction } from '../Redux/Actions';

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const handleADD = () => {
        dispatch(AddAction(10)); // Dispatch action with type "ADD"
    }

    const handleReduce = () => {
        dispatch(ReduceAction(10)); // Dispatch action with type "REDUCE"
    }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={handleADD}>+</button>
            <span>{count}</span>
            <button onClick={handleReduce}>-</button>
        </div>
    )
}
