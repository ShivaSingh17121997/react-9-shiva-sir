import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (

        <div style={{ position: "sticky", display: "flex", justifyContent: "space-around" }} >
            <NavLink to="/" > Home </NavLink>
            <NavLink to="/login" > Login </NavLink>
            <NavLink to="/about" > About </NavLink>
        </div>
    )
}
