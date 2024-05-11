import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <p>{getState().counter}</p>
    <button onClick={handleAdd} >Add</button>
    <button onClick={handleReduce} >Reduce</button>

  </>
  )
}

export default App
