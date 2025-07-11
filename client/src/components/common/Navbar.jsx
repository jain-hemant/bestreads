import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex lg:flex lg:flex-row justify-between items-center shadow-md sticky'>
      {/* Logo */}
      <div className='text-xl lg:text-4xl'>bestreads</div>
      {/* Menus */}
      <div className='flex lg:gap-4 lg:text-xl'>
        <Link to={"/"} className='lg:px-5 py-3 hover:bg-amber-950 hover:text-white '>Home</Link>
        <Link to={"/"} className='lg:px-5 py-3 hover:bg-amber-950 hover:text-white '>My Books</Link>
        <Link to={"/"} className='lg:px-5 py-3 hover:bg-amber-950 hover:text-white '>Browse ▾</Link>
        <Link to={"/"} className='lg:px-5 py-3 hover:bg-amber-950 hover:text-white '>Community ▾</Link>
      </div>
      {/* Searchbar */}
      <div className='hidden'>
        <input type="text" name="search" id="search" placeholder='Search Books' className='py-1.5 px-2 rounded-sm border-1 border-gray-400' />
      </div>
      {/* Icon Notifiation */}
      <div className='flex gap-2'>
        <div className='hidden lg:flex gap-2'>
          <img src='src/assets/svg/nav/icn_nav_notifications.svg' className='w-8 h-8' />
          <img src='src/assets/svg/nav/icn_nav_discussions.svg' className='w-8 h-8' />
          <img src='src/assets/svg/nav/icn_nav_msgs.svg' className='w-8 h-8' />
          <img src='src/assets/svg/nav/icn_nav_friend.svg' className='w-8 h-8' />
        </div>
        <div>
          <img src='src/assets/svg/nav/account.png' className='w-8 h-8' />
        </div>
      </div>
      {/* Account */}

    </div>
  )
}
