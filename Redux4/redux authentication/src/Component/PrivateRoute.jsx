import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {

    const isAuth = useSelector((store) => store.isAuth)
    // const isAuth = false


    if (!isAuth) {
        return <Navigate to="/login" />
    }


    return (
        <div>

            {children}
        </div>

    )
}
