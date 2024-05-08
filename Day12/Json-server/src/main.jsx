import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './Context/AuthContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </BrowserRouter>
  </AuthContext>
)
