import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import UseRefhook from './Pages/UseRefhook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseRefhook/>
     {/* <Home/> */}
    </>
  )
}

export default App
