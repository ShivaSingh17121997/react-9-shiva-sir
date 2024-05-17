import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", width:"1200px" , padding:"30px" , backgroundColor:"pink", color:"white" , fontWeight:"bolder" ,margin:"20px"}} >
            <Link to="/" >Home</Link>

            <Link to="/about"  > About</Link>

            <Link to="/contacts"  > Contact</Link>

            <Link to="/login"  > Login</Link>

            <Link to="/signup"  > Signup</Link>

        </div>
    )
}
