import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Contacts from '../Pages/Contacts'
import Counter from '../Pages/Counter'
import About from '../Pages/About'
import Login from '../Pages/Login'
import PrivateRoutes from './PrivateRoutes'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/contacts' element={
                    <PrivateRoutes>
                        <Contacts />
                    </PrivateRoutes>
                } />

                <Route path='/counter' element={
                    <PrivateRoutes>
                        <Counter />
                    </PrivateRoutes>
                } />


                <Route path='/about' element={
                    <PrivateRoutes>
                        <About />
                    </PrivateRoutes>
                } />


                <Route path='/login' element={<Login />} />


            </Routes>
        </div>
    )
}
