import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      console.log("i am mounted on ui")
    }, 1000)

    console.log("first")


    // 

  }, [count])

  const handleAdd = () => {
    setCount(count + 1)
  }





  return (

    <>
      <button onClick={handleAdd} >Add</button>

    </>
  )
}

export default App
