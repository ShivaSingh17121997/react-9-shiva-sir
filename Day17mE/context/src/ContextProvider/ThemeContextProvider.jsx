import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();  //1

export default function ThemeContextProvider({ children }) {  // 2 passing children as prop
    const [theme, settheme] = useState(false);

    const handleThem = () => {
        settheme(!theme)
    }

    return (
        <div>
            {/* step 3 wrap with thee context  */}
            <ThemeContext.Provider value={{ theme, handleThem }} >
                {children}
            </ThemeContext.Provider>
        </div>
    )
}
