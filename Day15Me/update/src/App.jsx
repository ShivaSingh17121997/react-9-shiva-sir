import { useContext, useState } from 'react'
import './App.css'
import Form1 from './Pages/Form1'
import Memo from './Pages/Memo'
import { AuthContext } from './ContexProvider/ThemeContextProvider'
import LazyLoading from './Pages/LazyLoading'
import Checkbox from './Pages/Checkbox'

function App() {

  const { theme, setTheme, ThemeChanger } = useContext(AuthContext);
  console.log(theme, setTheme, ThemeChanger);

  return (
    <div  >
      <h1>  Hello</h1>
      <button onClick={ThemeChanger} >Dark Mode</button>
      {/* <LazyLoading /> */}
      <Checkbox />


    </div >
  )
}

export default App



