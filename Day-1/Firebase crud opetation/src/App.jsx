import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoAppFireBase from './Pages/TodoAppFireBase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoAppFireBase />

    </>
  )
}

export default App
