import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Sort from './Pages/Sort'
import { lazy } from 'react'
import { Suspense } from 'react'

const Home = lazy(() => "./Pages/Home")

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>

    </>
  )
}

export default App
