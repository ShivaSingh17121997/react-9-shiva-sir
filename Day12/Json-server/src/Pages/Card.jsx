import React from 'react'

export default function Card({ id, title }) {
    return (
        <div style={{ border:'1px solid black' , margin:"10px", padding:'10px'}} >
            <h2>{id}</h2>
            <h1>{title}</h1>

        </div>
    )
}
