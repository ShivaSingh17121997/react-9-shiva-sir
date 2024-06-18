import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Pages/Counter'
import Todo from './Pages/Todo'

function App() {

  return (
    <>
      <Todo />
      <Counter />
    </>
  )
}

export default App
