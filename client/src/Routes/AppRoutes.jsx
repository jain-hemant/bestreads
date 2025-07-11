import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Landing from '../pages/Landing'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'

export default function AppRoutes() {
    let isAuthenticated = true
    return (
        <Routes>
            <Route path='/' element={isAuthenticated ? <Home /> : <Landing />} />
            <Route path='/register' element={isAuthenticated ? <Navigate to={"/"} replace /> : <Register />} />
            <Route path='/login' element={isAuthenticated ? <Navigate to={"/"} replace /> : <Login />} />

        </Routes>
    )
}
