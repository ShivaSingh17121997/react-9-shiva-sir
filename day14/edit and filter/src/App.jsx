import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import AllRoutes from './Pages/AllRoutes'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <AllRoutes />

    </div>
  )
}

export default App
