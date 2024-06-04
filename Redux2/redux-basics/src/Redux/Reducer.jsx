import React from 'react'
import { INCREMENT } from './ActionTypes';

export default function Reducer(state, action) {
    console.log(state, action)
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.payload };

        case "DECREMENT":
            return { ...state, count: state.count - 1 }

        case "RESET":
            return { count: 0 }

        default:
            return state

    }






}
