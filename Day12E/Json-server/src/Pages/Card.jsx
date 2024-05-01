



import React from 'react'

export default function Card({ id, brand, category }) {
    return (
        <div  style={{border:'1px solid black' , padding:"10px", margin:'50px'}} >
            <h1>{id}</h1>
            <h2>{brand}</h2>
            <h3>{category}</h3>

        </div>
    )
}
