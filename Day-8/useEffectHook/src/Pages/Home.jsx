
import { useEffect, useState } from 'react'


function Home() {

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }




    return <>
        <h1>HOme Page</h1>
        <button onClick={handleAdd} >Show</button>
        

    </>
}


export default Home;