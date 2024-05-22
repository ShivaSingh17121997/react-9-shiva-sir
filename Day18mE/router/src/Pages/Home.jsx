import React, { useContext } from 'react'
import { AuthContext } from '../ContextProvider/AuthContextProvidr'

export default function Home() {

  const { Logout } = useContext(AuthContext);

  return (
    <div>
      <h1 className='bg-teal-600  py-10	'  >Home</h1>
      <button onClick={Logout} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>

    </div>
  )
}
