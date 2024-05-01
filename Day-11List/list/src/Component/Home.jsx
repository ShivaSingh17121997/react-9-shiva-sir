

// data in the form list

import { useEffect, useState } from "react";

function Home() {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1)


    useEffect(() => {
        fetch(`http://localhost:8000/posts?_page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPosts(data)

            })
            .catch((err) => console.log("something is wrong in the fetch"))

    }, [page])


    return <>

        <ul>
            {
                posts.map((item, index) => {
                    return <div key={item.id} >
                        <li>
                            title:  {item.title}
                        </li>
                        <li>
                            body:    {item.body}
                        </li>
                    </div>
                })
            }

            
        </ul>


    </>
}

export default Home;