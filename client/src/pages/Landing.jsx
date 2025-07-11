import React from 'react'
import BookCard from "../components/app/BookCard"
export default function Landing() {
    return (
        <div className='flex'>
            <div className='w-3/12'>Left Side</div>
            <div className='w-10/12 border-2 border-blue-900'>
                <BookCard />
            </div>
            <div className='w-3/12'>Right Side</div>
        </div>
    )
}
