import { useEffect, useState } from "react"




function Home() {
    // const [Product, setProduct] = useState([])
    const [edit, setEdit] = useState(null)
    const [updateInput, setUpdatedINput] = useState("")
    const [datas, setDatas] = useState([])

    const data = [
        {
            id: 1,
            name: "ram"
        }
    ]


   

    const handleEdit = (id) => {

        const toEdit = data.find((item) => item.id == id)
        console.log(toEdit)
        setEdit(toEdit)

    }

    const handleUpdate = () => {
        const updatedData = data.map((item) => {
            item.id === edit.id ? { ...item, name: edit.name } : item
            setEdit
        })
        setEditnull

    }





    return <>

        <ul>
            {
                data.map((item, index) => {
                    return (<div key={item.id} >
                        <li>
                            {item.name}
                            <button onClick={() => handleEdit(item.id)} >edit</button>
                        </li>
                    </div>
                    )
                })
            }
        </ul>

        <div>
            {edit &&
                <div>
                    <input onChange={(e) => setEdit({ ...edit, name: e.target.value })} type="text" value={edit.name} />
                    <button onClick={handleUpdate} >update</button>
                </div>

            }
        </div>

    </>
}

export default Home