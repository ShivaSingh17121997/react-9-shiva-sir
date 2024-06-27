import React, { useState } from 'react'

export default function Counter() {
  const [login, setLogin] = useState({ email: "" });
  console.log(login.email)
  return (
    <div>
      <input type="text" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />

    </div>
  )
}
