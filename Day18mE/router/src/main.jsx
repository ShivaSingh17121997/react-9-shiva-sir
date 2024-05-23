import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvidr from './ContextProvider/AuthContextProvidr.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvidr>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthContextProvidr>
  </BrowserRouter>
)
