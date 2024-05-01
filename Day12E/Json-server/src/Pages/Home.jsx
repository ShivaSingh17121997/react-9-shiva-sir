import { useEffect, useState } from "react";

import Card from "./Card";


function Home() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1)
    console.log(products.length)

    useEffect(() => {
        fetch(`http://localhost:8000/products?_page=${page}&limit=10`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data)

            })
            .catch((err) => console.log('something is wrong'))
    }, [page])

    return <>
        <h1>Home</h1>

        <div>
            <button disabled={page === 1} onClick={() => setPage(page - 1)} >Prev</button>
            <button>{page}</button>
            <button disabled={page === ((products.length - 1) / 10)} onClick={() => setPage(page + 1)} >Next</button>
        </div>

        {
            products.map((item, i) => <Card  {...item} />)

        }


    </>
}


export default Home;