import React, { useContext } from 'react'
import { ThemeContext } from '../ContextProvider/ThemeContextProvider'

export default function About() {
    const { theme, handleThem } = useContext(ThemeContext)

    return (
        <div style={{ backgroundColor: theme ? "white" : "black", width: "100vw", height: "100vh" }} >
            <button onClick={handleThem} >setthem</button>
        </div>
    )
}
