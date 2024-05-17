import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvidr from './ContextProvider/AuthContextProvidr.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvidr>
      <App />
    </AuthContextProvidr>
  </BrowserRouter>
)
