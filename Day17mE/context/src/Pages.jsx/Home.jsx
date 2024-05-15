import React, { useContext } from 'react'
import { ThemeContext } from '../ContextProvider/ThemeContextProvider'

export default function Home() {
    const { theme, handleThem } = useContext(ThemeContext)
    console.log(theme)

    return (
        <div style={{ backgroundColor: theme ? "white" : "black", width: "100vw", height: "100vh" }} >
            <button onClick={handleThem} >  Settheme</button>
        </div>
    )
}
