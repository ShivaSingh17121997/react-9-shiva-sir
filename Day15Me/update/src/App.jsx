import { useState } from 'react'
import './App.css'
import Form1 from './Pages/Form1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form1 />
    </>
  )
}

export default App
