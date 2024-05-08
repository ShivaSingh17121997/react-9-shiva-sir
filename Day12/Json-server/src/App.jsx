import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import AllRoutes from './Componets/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllRoutes/>
      <h1>Learning json-server</h1>
      {/* <Home/> */}
    </>
  )
}

export default App
