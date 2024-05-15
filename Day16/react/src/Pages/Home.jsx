import React, { useContext } from 'react'
import { ThemeContext } from '../ContextProvider/ThemeContextProvider'

export default function Home() {
    const { theme, handleTheme, style } = useContext(ThemeContext)
    console.log(theme, style)

    return (
        <div style={{ backgroundColor: theme ? "black" : "white", width: "auto", height: "200vh" }} >
            <button onClick={handleTheme} >setTheme</button>
        </div>
    )
}
