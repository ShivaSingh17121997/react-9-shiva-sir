import React from 'react'

export default function Reducer(state, action) {

    console.log(state, action)
    switch (action.type) {
        case "LOGIN_TOKEN":
            return { ...state, token: action.payload, isAuth: true }

        default:
            return state;

    }

}
