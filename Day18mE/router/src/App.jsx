import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Component/Navbar'
import Footer from './Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App
