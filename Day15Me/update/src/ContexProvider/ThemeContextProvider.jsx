import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(false);

    const ThemeChanger = () => {
        setTheme(!theme)
    }

    return (
        <div>
            <AuthContext.Provider value={{ theme, setTheme, ThemeChanger }} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}
