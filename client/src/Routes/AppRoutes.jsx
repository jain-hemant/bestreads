import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Landing from '../pages/Landing'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Books from '../pages/Books'
import MyBooks from '../pages/MyBooks'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../redux/slice/authSlice'

export default function AppRoutes() {
    let fullState = useSelector(state => state)
    let isAuthenticated = useSelector(selectIsAuthenticated) // state => state.auth.isAuthenticated
    useEffect(() => {
        console.log("Auth Test", isAuthenticated, fullState)
    }, [fullState, isAuthenticated])
    return (
        <Routes>
            <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to={"/landing"} replace />} />
            <Route path='/landing' element={!isAuthenticated && <Landing />} />
            <Route path='/register' element={isAuthenticated ? <Navigate to={"/"} replace /> : <Register />} />
            <Route path='/login' element={isAuthenticated ? <Navigate to={"/"} replace /> : <Login />} />
            <Route path='/books' element={isAuthenticated ? <Books /> : <Navigate to={"/landing"} replace />} />
            <Route path='/mybook' element={isAuthenticated ? <MyBooks /> : <Navigate to={"/landing"} replace />} />

        </Routes>
    )
}
