import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState(false)

    const handleTheme = () => {
        setTheme(!theme)
    }

    

    return (
        <div>
            <ThemeContext.Provider value={{ theme, handleTheme, setTheme, style }}  >
                {children}
            </ThemeContext.Provider>

        </div>
    )
}
