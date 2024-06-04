import { useState } from 'react'
import './App.css'
import CounterWithReducer from './Pages/CounterWithReducer'
import TodoWithReducer from './Pages/TodoWithReducer'
import TodoListWithReducer from './Pages/TodoListWithReducer'
import UPdateTodo from './Pages/UPdateTodo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CounterWithReducer/> */}
      {/* <TodoWithReducer /> */}
      {/* <TodoListWithReducer /> */}
      {/* <UPdateTodo/> */}
      <TodoWithReducer/>
    </>
  )
}

export default App
