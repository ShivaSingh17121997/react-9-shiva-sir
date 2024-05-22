import React, { createContext, useState } from 'react'

export const AuthContexts = createContext();

export default function AuthProvidere({ children }) {


    const [token, setToken] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const login = (token) => {
        setIsAuth(true)
        setToken(token)
    }



    const logout = () => {
        setIsAuth(false)
        setToken(null)
    }

    console.log(isAuth, "form contexgt")
    console.log(token, 'from context')


    return (
        <div>
            <AuthContexts.Provider value={{ isAuth, login, logout }}>
                {children}
            </AuthContexts.Provider>

        </div>
    )
}
