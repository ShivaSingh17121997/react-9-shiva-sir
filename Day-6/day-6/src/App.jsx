import { useState } from 'react'

import './App.css'
import { Store } from './Redux/Store'

function App() {
  const [count, setCount] = useState(0)
  const data = Store
  const { getState, dispatch } = Store

  const handleAdd = () => {
    // setCount(prev => prev + 1)
    dispatch({ type: "ADD", payload: 1 })
    console.log(getState())
  }

  const handleReduce = () => {
    dispatch({type:"REDUCE"})

  }

  return (<>
    <h1>Counter</h1>
    <h1>{getState().counter}</h1>
    <h1>{count}</h1>
    <button onClick={handleAdd} >Add</button>
    <button onClick={handleReduce} >Reduce</button>

  </>
  )
}

export default App
