import React from 'react'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import AppRoutes from './Routes/AppRoutes'

export default function App() {
  let isAuthenticated = true
  return (
    <div className='container space-y-4 bg-gray-300'>

      {isAuthenticated && <Navbar />}
      <AppRoutes />
      {isAuthenticated && <Footer />}
    </div>
  )
}
