import React from 'react'

export default function Card({ title, description, price, image }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <img src={image} alt={title} style={{ maxWidth: '200px' }} />
            <hr />
        </div>
    )
}
