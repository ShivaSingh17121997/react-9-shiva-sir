import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Checkboxes from './Component/Checkboxes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      <Checkboxes/>
    </>
  )
}

export default App
