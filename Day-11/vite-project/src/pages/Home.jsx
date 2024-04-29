import { useEffect, useState } from "react"




function Home() {
    const [Product, setProduct] = useState([])



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data)
            })
            .catch((err) => console.log(error, "Something is wrong in fetching data"))
    }, [])


    return <>

        <ul>
            {
                Product.map((item, index) => {
                    return (<div key={item.id} >
                        <li>
                            {item.title}
                        </li>
                    </div>
                    )
                })
            }
        </ul>

    </>
}

export default Home