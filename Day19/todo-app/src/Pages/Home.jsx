import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [todo, setTodo] = useState("")
    const [data, setData] = useState([])


    const handleTodo = (e) => {
        e.preventDefault()
        axios.post(`  http://localhost:3000/todos`, {
            todo: todo
        })
            .then(res => {
                fetcheData()
                console.log("Date added successfully")
            })
    }


    // read

    const fetcheData = () => {
        axios.get(`http://localhost:3000/todos`)
            .then(res => {
                setData(res.data)
                // console.log("Date added successfully")
                console.log(res.data)
            })
    }

    useEffect(() => {

        fetcheData()

    }, [])

    const handleDelete = (id) => {
        axios.delete(` http://localhost:3000/todos/${id}`)
            .then(res => {
                setData(data.filter(item => item.id !== id))
                // setData(data.filter(item => item.id !== id));
                console.log("delete successfull")
            })
    }



    return (
        <div>
            <form onSubmit={handleTodo}>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Create a todo here' />
                <button>Save</button>
            </form>

            <div>
                {
                    data.map((item) => {
                        return <div key={item.id} >
                            <h1>{item.id}</h1>
                            <h1>{item.todo}</h1>
                            <button onClick={() => handleDelete(item.id)}>delete</button>
                        </div>
                    })
                }
            </div>
        </div>


    )
}
