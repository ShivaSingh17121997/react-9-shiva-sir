// import React, { Children, useContext, useEffect } from 'react'
// import { Navigate } from 'react-router-dom'
// import { AuthContext } from '../ContextProvider/AuthContextProvidr'

// export default function PrivateRoutes({ children }) {
//     const { isAuth } = useContext(AuthContext);

//     console.log(isAuth, "from private")

//     if (!isAuth) {
//         return <Navigate to="/login" />
//     }
//     return children
// }


import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function PrivateRoutes({ children }) {

    let isAuth = true;
    if (!isAuth) {
        return <Navigate to="/login" />
    }


    return (
        <div>
            {children}
        </div>
    )
}
