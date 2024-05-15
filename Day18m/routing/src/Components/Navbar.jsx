import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
    return (
        <div style={{ backgroundColor: 'white', width: "100", display: "flex", justifyContent: 'space-evenly' }} >
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact" >Contacts</Link>
            <Link to="/login" >Login</Link>
            <Link to="/signup" >Signup</Link>
        </div>
    )
}
