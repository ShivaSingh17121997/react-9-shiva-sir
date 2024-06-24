import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const isAuth = useSelector(store => store.isAuth)
    const dispatch = useDispatch();

    const token = useSelector(store => store.token)
    console.log(isAuth, token, 'isAuth')

    const handleLogout = () => {
        dispatch({type:"LOGOUT"  })
    }


    return (
        <div>


            <h1>Counter</h1>
            <button onClick={handleLogout} > Logout</button>


        </div>
    )
}
