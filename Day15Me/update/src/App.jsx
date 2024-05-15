import React, { Suspense, lazy, useContext, useState } from 'react'
import './App.css'
import Form1 from './Pages/Form1'
import Memo from './Pages/Memo'
import { AuthContext } from './ContexProvider/ThemeContextProvider'
import LazyLoading from './Pages/LazyLoading'
import Checkbox from './Pages/Checkbox'
// import Checkbox1 from './Pages/Checkbox1'
const Checkbox1 = lazy(() => "./Pages/Checkbox1")

function App() {

  const { theme, setTheme, ThemeChanger } = useContext(AuthContext);
  console.log(theme, setTheme, ThemeChanger);

  return (
    <div  >
      <h1>  Hello</h1>
      <button onClick={ThemeChanger} >Dark Mode</button>

      {/* <LazyLoading /> */}
      {/* <Checkbox /> */}
      <Suspense fallback={<div>Loading...</div>} >
        <Checkbox1 />
      </Suspense>


    </div >
  )
}

export default App



