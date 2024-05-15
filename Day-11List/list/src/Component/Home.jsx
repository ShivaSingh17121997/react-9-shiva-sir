

// data in the form list

import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";

function Home() {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1)
    consgt[loading, setLoading] = useState(false)


    // useEffect(() => {
    //     fetch(`http://localhost:8000/posts?_page=${page}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setPosts(data)

    //         })
    //         .catch((err) => console.log("something is wrong in the fetch"))

    // }, [page])

    const handleClick = () => {
        setPage(page + 1)
    }

    // const fetchPost = useCallback(() => {
    //     fetch(`http://localhost:8000/posts?_page=${page}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setPosts(data)

    //         })
    //         .catch((err) => console.log("something is wrong in the fetch"))
    // }, [page]);
    // useEffect(() => {
    //     fetchPost()
    // }, [fetchPost])


    // useMemo hook


    // let memoizedval = useMemo(() => {
    //     let sum = 0;
    //     for (let i = 0; i < 10000000; i++) {
    //         sum += i * 1999
    //     }
    //     return sum;
    // }, [])

    // console.log(memoizedval)

    let memoizedVal = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < 10000980000; i++) {
            sum += i * 50
        }
        return sum
    }, [])

    console.log(memoizedVal)

    console.log("hello bro")


    const Memoizedfun = (() => {
        fetch("url")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [url])

     useEffect(() => {
        Memoizedfun()
    }, [Memoizedfun])






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
        <button onClick={handleClick} >Click</button>


    </>
}

export default Home;