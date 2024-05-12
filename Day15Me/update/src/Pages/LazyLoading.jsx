import React, { Suspense, lazy, useEffect, useState } from 'react'
// import Card from '../Components/Card';

const Card = lazy(() => import("../Components/Card"))

export default function LazyLoading() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <Suspense fallback={<div>Loading...</div>} >
                {products.map((item) => <Card  {...item} />)}
            </Suspense>

        </div>
    )
}
