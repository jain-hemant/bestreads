import React, { useState } from 'react'

export default function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))

  }
  const handleSubmit = (e) => {
    console.log(formState)
  }
  return (
    <div className='container flex justify-center'>
      <div className='h-12/12 w-[25%]'>
        <div className='py-4 text-5xl text-center'>
          bestreads
        </div>
        <div className='space-y-2'>
          <h2 className='text-4xl font-bold my-3 tracking-wide text-center'>Sign In</h2>
          <div className='space-y-2'>
            <p>Email</p>
            <input type="text" name='email' value={formState.email} onChange={handleChange} placeholder='honey@example.com'
              className='w-11/12 rounded-xl px-4 py-1 border-1'
            />
          </div>
          <div className='space-y-2'>
            <p>Password</p>
            <input type="password" name="password" value={formState.password} onChange={handleChange} placeholder='Enter password.'
              className='w-11/12 rounded-xl px-4 py-1 border-1'
            />
          </div>

          <button
            onClick={handleSubmit}
            className='w-11/12 mt-4 rounded-xl px-4 py-2 border-1 cursor-pointer bg-black text-white'
          >Sign in
          </button>
          <p className='text-sm mt-4'>
            By signing in, you agree to the Goodreads Terms of Service and Privacy Policy
          </p>
          <div className='flex gap-2'>
            <input type="checkbox" name="tick" />Keep me signed in. Details
          </div>
          <p className='mt-6 text-center'>
            New to Bestreads
          </p>
        </div>
        <button
          onClick={handleSubmit}
          className='w-11/12 mt-4 rounded-xl px-4 py-2 border-1 cursor-pointer  text-gray-800 hover:bg-gray-200'
        >Sign up
        </button>
        <div className='mt-10 flex flex-col items-center gap-2 '>
          <div className='text-sm flex gap-4'> <a href="#">Terms of Service</a> <a href="#">Privacy</a>  <a href="#">Help</a></div>
          <p className='text-sm'>© 2025 Bestreads, Inc.</p>
        </div>
      </div>
    </div>
  )
}
