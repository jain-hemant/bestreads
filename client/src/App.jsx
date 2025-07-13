// import React from 'react'
// import Register from './components/auth/Register'
// import Login from './components/auth/Login'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import AppRoutes from './Routes/AppRoutes'
import { selectIsAuthenticated } from './redux/slice/authSlice'
import { useEffect } from 'react'
import FetchAPI from './api/BaseAPI'

export default function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(selectIsAuthenticated)

  // useEffect(() => {
  //   async function fetchMe() {
  //     data = await FetchAPI("/api/auth/me")
  //     return data
  //   }
  //   const data = fetchMe()
  //   dispatch(data)
  // }, [])

  return (
    <div className='container space-y-4 bg-gray-300'>

      {isAuthenticated && <Navbar />}
      <AppRoutes />
      {isAuthenticated && <Footer />}
    </div>
  )
}
