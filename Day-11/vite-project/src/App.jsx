
import { useState } from 'react'
import './App.css'

// import Home from './pages/Home'
import LifeCycleMethod from './pages/LifeCycleMethod'


function App() {

  const [showCompoent, setComponent] = useState(true);

  return <div>
    <button onClick={() => setComponent(!showCompoent)} >delete</button>
    {showCompoent && <LifeCycleMethod />}
  </div>

}

export default App
