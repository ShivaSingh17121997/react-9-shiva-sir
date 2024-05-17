import React, { useContext } from 'react'
import { AuthContext } from '../ContextProvider/AuthContextProvidr'

export default function Home() {
  const {  Logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={Logout } >Logout</button>
    </div>
  )
}
