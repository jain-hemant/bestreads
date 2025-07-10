import React, { useState } from 'react'
import FetchAPI from '../../api/BaseAPI'

export default function Register() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState(prev => ({ ...prev, [name]: value }))

    }
    const handleSubmit = async (e) => {

        const data = await FetchAPI({
            endpoint: "/api/auth/register",
            method: "POST",
            payload: formState
        })

        console.log("my data - ", data)

    }
    return (
        <div className='container flex justify-center'>
            <div className='h-12/12 w-[25%] m-auto'>
                <div className='py-4 text-5xl text-center'>
                    BestReads
                </div>
                <div className='space-y-2'>
                    <h2 className='text-4xl font-bold my-3 tracking-wide'>Create Account</h2>
                    <div className='space-y-2'>
                        <p>Your Name</p>
                        <input type="text" name='name' value={formState.name} onChange={handleChange} placeholder='First and last name.'
                            className='w-11/12 rounded-xl px-4 py-1 border-1'
                        />
                    </div>
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
                    <div className='space-y-2'>
                        <p>Confirm password</p>
                        <input type="password" name="confirmPassword" value={formState.confirmPassword} onChange={handleChange} placeholder='Enter password.'
                            className='w-11/12 rounded-xl px-4 py-1 border-1'
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className='w-11/12 mt-4 rounded-xl px-4 py-2 border-1 bg-black text-white'
                    >Create account</button>
                    <p className='text-sm'>
                        By creating an account, you agree to the Goodreads Terms of Service and Privacy Policy
                    </p>
                    <p className='mt-6'>
                        Already have an account? <a href="/login">Sign in</a>
                    </p>
                </div>
                <div className='mt-10 flex flex-col items-center gap-2'>
                    <div className='text-sm flex gap-4'> <a href="#">Terms of Service</a> <a href="#">Privacy</a>  <a href="#">Help</a></div>
                    <p className='text-sm'>© 2025 Goodreads, Inc.</p>
                </div>
            </div>
        </div>
    )
}
