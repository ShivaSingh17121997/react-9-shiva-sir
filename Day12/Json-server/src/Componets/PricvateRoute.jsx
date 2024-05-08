import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';


export default function PrivateRoute({ children }) {
    const { isAuth } = useContext(AuthContext)
    console.log(isAuth,"isAuth")
    if (!isAuth) {
        return <Navigate to="/contacts" />
    }
    return (
        <div>
            {children}
        </div>
    )
}
