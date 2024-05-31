import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages.jsx/Home'
import TodoReducer from './Pages.jsx/TodoReducer'
import TodoListReducer from './Pages.jsx/TodoListReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoListReducer/>
    </>
  )
}

export default App
