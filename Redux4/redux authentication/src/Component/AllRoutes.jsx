


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Counter from '../Pages/Counter';
import Login from '../Pages/Login';
import About from '../Pages/About';
import PrivateRoute from './PrivateRoute';

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PrivateRoute>
                    <Counter />
                </PrivateRoute>} />


                <Route path='/login' element={< Login />} />


                <Route path='/about' element={
                    <PrivateRoute>
                        <About />
                    </PrivateRoute>

                } />

            </Routes>
        </div>
    )
}
