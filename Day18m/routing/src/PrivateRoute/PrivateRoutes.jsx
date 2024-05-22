import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({ children }) {

    let isAuth = false

    if (!isAuth) {
        return <Navigate to="/login" />
    }


    return (
        <div>
            {children}
        </div>
    )
}
