import { useState } from 'react'

import './App.css'
import Counter from './Pages/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />

    </>
  )
}

export default App
