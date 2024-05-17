import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Contact from './Contact';
import About from './About';
import PrivateRoutes from '../PrivateRoute/PrivateRoutes';

export default function Allroutessss() {
    return (
        <div>

            <Routes >
                <Route path="/" element={<PrivateRoutes>
                    <Home />
                </PrivateRoutes>}
                />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/contact" element={
                    <PrivateRoutes>
                        <Contact />

                    </PrivateRoutes>
                } />

                <Route path="/about" element={
                    <PrivateRoutes>
                        <About />
                    </PrivateRoutes>


                } />
            </Routes>

        </div>
    )
}

