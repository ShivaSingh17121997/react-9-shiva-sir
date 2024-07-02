import axios from "axios";
import { useState } from "react";


function Home() {

    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const handleAdd = () => {

        if (title == "" || brand == "") {
            alert("Please Enter valid value")
            return
        }

        axios.post(`http://localhost:8000/posts`, { title, brand })
            .then((res) => console.log(res))

        setTitle("")
        setBrand("")
    }


    return <div>
        <h1>Home</h1>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /> <br />
        <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} /><br /><br />
        <button onClick={handleAdd} >Add</button>

    </div>

}

export default Home;