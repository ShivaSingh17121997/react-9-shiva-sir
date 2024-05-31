import { useState } from 'react'
import './App.css'
import CounterWithReducer from './Pages/CounterWithReducer'
import TodoWithReducer from './Pages/TodoWithReducer'
import TodoListWithReducer from './Pages/TodoListWithReducer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CounterWithReducer/> */}
      {/* <TodoWithReducer /> */}
      <TodoListWithReducer />
    </>
  )
}

export default App
