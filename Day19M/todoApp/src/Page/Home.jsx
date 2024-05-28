import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

export default function Home() {
    const [todo, setTodo] = useState("");
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(null)



    // consol/e.log(data.reverse)
    // Create
    const handleTodo = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3000/toods`, {
            todo: todo
        })
            .then((res) => {
                console.log("data Added successfully")
                fetchData()
                setTodo("")
            })
    }


    // Read

    const fetchData = () => {
        axios.get("http://localhost:3000/toods")
            .then(res => {
                console.log(res.data)
                setData(res.data)

            })
            .catch((err) => console.log("something is worng"))
    }

    useEffect(() => {
        fetchData()

    }, [])


    // Delete function

    const handleDelete = (id) => {

        axios.delete(`http://localhost:3000/toods/${id}`)
            .then(res => {
                console.log("data delete successfully")
                setData(data.filter((item) => item.id !== id))
            }
            )
    }

    // edit function 
    const handleEdit = (id) => {
        const isEdited = data.find((item) => item.id == id)
        setEdit(isEdited)
    }

    console.log(edit)

    // Edit save funciton 

    const handleEditSave = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:3000/toods/${edit.id}`, {
            todo: edit.todo
        }).then((res) => {
            console.log(res)
            console.log("data edited successfully")

        })
            .catch((error) => console.log("something is wrong"))
    }



    return (
        <div>
            <h1>Todo App</h1>

            <form onSubmit={handleTodo} >
                <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Enter todos...' />
                <button>Save</button>

            </form>

            <div style={{ display: "flex", justifyContent: 'space-evenly', margin: "20px" }}>

                <div>
                    {
                        data.map((item, i) => {
                            return <div key={i}>
                                {/* <h2>{i}</h2> */}
                                <h1>{item.todo}</h1>
                                <button onClick={() => handleDelete(item.id)} >Delete</button>
                                <button onClick={() => handleEdit(item.id)} >Edit</button>
                            </div>
                        })
                    }
                </div>


                <div>
                    {
                        edit && <div>
                            <form>
                                <input value={edit.todo} onChange={(e) => setEdit({ ...edit, todo: e.target.value })} type="text" />
                                <button onClick={handleEditSave} >Save</button>
                            </form>

                        </div>
                    }
                </div>

            </div>
        </div>
    )
}


