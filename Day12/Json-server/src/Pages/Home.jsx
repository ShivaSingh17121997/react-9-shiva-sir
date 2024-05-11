import { useEffect, useState } from "react"
import Card from './Card'

function Home() {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [edit, setEdit] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8080/posts?_page=${page}_limit=10`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data)
            })

    }, [page])

    // edit 
    const handleEdit = (id) => {
        const editedData = product.find((item) => item.id === id)
        setEdit(editedData);
    }
    console.log(edit)

    // update

    const handleUpdate = () => {
        fetch(`http://localhost:8080/posts/${edit.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title:edit.title})
        })
            .then(res => {
                alert("data updated")
                console.log("successfully added data")
                res.json()})
            .then(data => console.log(data))

    }




    return <div  >
        <h1>Home</h1>
        <div>
            <button disabled={page == 1} onClick={() => setPage(page - 1)} >prev </button>

            <button>{page}</button>

            <button disabled={page === (product.length)} onClick={() => setPage(page + 1)} >next</button>
        </div>

        <div style={{ display: "flex", justifyContent: 'space-around' }} >
            <div>
                {
                    product.map((item, i) => <Card handleEdit={handleEdit}  {...item} />)
                }
            </div>

            {/* edit functionality */}
            <div>
                {edit && <div>
                    <input type="text" value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} />
                    <button onClick={handleUpdate} >  Update</button>
                </div>
                }
            </div>
        </div>

    </div>
}

export default Home