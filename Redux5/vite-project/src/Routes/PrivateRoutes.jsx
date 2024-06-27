import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({ children }) {

    // const isAuth = useSelector(store => store.isAuth)
    // console.log(isAuth, "isAuth form private routes")
    const isAuth = true;

    if (!isAuth) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            {children}
        </div>
    )
}
