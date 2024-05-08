import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Contacts from "../Pages/Conatcts"
import PrivateRoute from './PricvateRoute';
export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } >Hone</Route>
                <Route path='/contacts' element={<Contacts />} >Login</Route>
            </Routes>
        </div>
    )
}
