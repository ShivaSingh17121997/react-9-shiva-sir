import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import About from './About'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
