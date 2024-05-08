import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    const login = (token) => {
        setIsAuth(true);
        // It seems like you intended to set token somewhere, but it's not being used here
    };

    const logout = () => {
        setIsAuth(false);
    };

    return (
        <div>
            {/* Wrap children in a single container element */}
            <AuthContext.Provider value={{ isAuth, login, logout }}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}
