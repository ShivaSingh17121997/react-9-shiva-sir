import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvidr({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);

    const Login = (token) => {
        setIsAuth(true);
        setToken(token);
        console.log(token, "context");
    };

    const Logout = () => {
        setIsAuth(false);
        setToken(null);
    };

    console.log(isAuth);
    console.log(token, "token");

    return (
        <div>
            <AuthContext.Provider value={{ Login, Logout, isAuth }}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}
