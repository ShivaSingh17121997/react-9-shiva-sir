import React, { useEffect, useState } from 'react'
import axios from 'axios'



// post data to backend
export default function Home() {
    const [todo, setTodo] = useState("");
    const [todoData, setTodoData] = useState([]);
    const [edit, setEdit] = useState(null);

    const reverseDta = todoData.reverse()



    const handletodos = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8080/todos`, {
            todo: todo
        })
            .then((res) => {
                console.log("data added successfully")
                fetchedData();
                setTodo("")
            })

    }



    // fetch data form backedn
    const fetchedData = () => {
        axios.get(`http://localhost:8080/todos`)
            .then((res) => {
                console.log(res.data.reverse)
                setTodoData(res.data.reverse())
            })
            .catch((error) => console.log
                ("something is wrong"))

    }

    useEffect(() => {
        fetchedData();

    }, [])

    // delete funciton 

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/todos/${id}`)
            .then(res => {
                console.log("data deleted successfully")
                setTodoData(todoData.filter((item) => item.id !== id))
            })

    }

    // Edit Function

    const handleEdit = (id) => {

        const isEdited = todoData.find((item) => item.id === id)
        setEdit(isEdited)

    }

    console.log(edit)

    // handle edit save
    const handleEditSave = () => {
        axios.patch(`http://localhost:8080/todos/${edit.id}`, {
            todo: edit.todo
        })
            .then((res) => {
                console.log("data added successfully")
            })

    }


    return (
        <div>
            <h1>Todo App</h1>

            <form onSubmit={handletodos} >
                <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Enter your todos here...' />
                <button>Save</button>
            </form>

            <div style={{ display: "flex", justifyContent: "space-evenly" }} >


                <div>
                    {
                        todoData.map((item, i) => {
                            return <div key={item.id}>
                                {/* <h2>{item.id}</h2> */}
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
                            <input value={edit.todo} onChange={(e) => setEdit({ ...edit, todo: e.target.value })} type="text" />
                            <button onClick={handleEditSave} >Save</button>

                        </div>

                    }
                </div>
            </div>

        </div>
    )
}
