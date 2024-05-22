import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import PrivateRoutes from '../Component/PrivateRoutes'


export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PrivateRoutes> <Home /></PrivateRoutes>} />

                <Route path='/about' element={<PrivateRoutes><About /></PrivateRoutes>} />

                <Route path='/contacts' element={<Contact />} />

                <Route path='/login' element={<Login />} />

                <Route path='/signup' element={<Signup />} />

            </Routes>

        </div>
    )
}
