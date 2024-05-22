import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvidere from './Contexts/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvidere>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvidere>
)
