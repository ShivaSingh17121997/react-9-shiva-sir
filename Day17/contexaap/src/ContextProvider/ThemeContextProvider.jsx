import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState(false);

    const handleThemeChange = () => {
        setTheme(!theme)
    }


    return (
        <div>
            <ThemeContext.Provider value={{ theme, handleThemeChange }}   >
                {children}
            </ThemeContext.Provider>
        </div>
    )
}
