import React, { useContext } from 'react'
import { ThemeContext } from '../ContextProvider/ThemeContextProvider'

export default function Home() {

    const { theme, handleThemeChange } = useContext(ThemeContext);

    console.log(theme, "theme")


    return (
        <div style={{ backgroundColor: theme ? "white" : "black", width: "100vw", height: "100vh" }} >
            <button onClick={handleThemeChange} >SetTheme</button>
        </div>
    )
}
