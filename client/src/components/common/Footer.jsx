import React from 'react'
import { Link } from "react-router-dom"
export default function Footer() {

  const date = new Date()
  const year = date.getFullYear()
  return (
    // main footer div
    <div className='grid grid-cols-1 gap-y-10 lg:gap-50  lg:grid-cols-2'>
      {/* Footer content div */}
      {/* Comapny and Work with and connect div */}
      <div className='border-blue-600'>

        <div className='grid grid-cols-2 text-center gap-y-2 lg:grid-cols-3'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-gray-700'>COMPANY</h1>
            <Link to={"#"}>About us</Link>
            <Link to={"#"}>Carrers</Link>
            <Link to={"#"}>Terms</Link>
            <Link to={"#"}>Privacy</Link>
            <Link to={"#"}>Intrest Based Ads</Link>
            <Link to={"#"}>Ad Preference</Link>
            <Link to={"#"}>Help</Link>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold text-gray-700'>WORK WITH US</h1>
            <Link to={"#"}>Authors</Link>
            <Link to={"#"}>Advertise</Link>
            <Link to={"#"}>Authors & ads blog</Link>
          </div>
          {/* Connect */}
          <div className='flex flex-col  justify-center gap-3 items-center '>
            <h1 className='font-bold text-gray-700'>CONNECT</h1>
            <div className='flex gap-4'>
              <img src='src/assets/svg/Facebook.svg' className='p-2  bg-gray-400 rounded-full' />
              <img src='src/assets/svg/Twitter.svg' className='p-2  bg-gray-400 rounded-full' />
              <img src='src/assets/svg/Instagram.svg' className='p-2  bg-gray-400 rounded-full' />
              <img src='src/assets/svg/Linkedin.svg' className='p-2  bg-gray-400 rounded-full' />
            </div>
          </div>
        </div>
      </div>

      <div >
        {/* App Logo */}
        <div className='flex gap-4 justify-center'>
          <img src="src/assets/svg/ios.svg" alt="ios logo"
            className='w-40 h-15'
          />
          <img src="src/assets/svg/android.png" alt="android logo"
            className='w-40 h-15'
          />
        </div>
        <div className='flex gap-4 justify-center'>
          <p> &copy; {year} Goodreads, Inc.</p>
          <p>Mobile version</p>
        </div>
      </div>
    </div>
  )
}
