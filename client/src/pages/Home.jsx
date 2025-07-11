import React from 'react'
import BookCard from '../components/app/BookCard'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='w-screen grid grid-cols-[24%_50%_24%] px-4 gap-2'>
            {/* left side panel */}
            <div className=''>
                <h3>CURRENTLY READING</h3>
                <span>
                    <img src="https://s.gr-assets.com/assets/react_components/currently_reading/icn_default_CR_ltrail-16f28d39654104ceb329648a474943eb.svg" alt="" />
                    <p>What are you reading?</p>
                </span>
                <input type="text" placeholder='Search books' />
                <span><Link to={"#"}>Recommendations</Link>. <Link to={"#"}>General update</Link> </span>
                <div>
                    <h4>2025 Reading Challenge</h4>
                    <p>Challenge yourself to read more this year!</p>
                    <span>
                        <img src="https://s.gr-assets.com/assets/challenges/yearly/img_RCBook-626ef5100b911207af0c4d84f02df03a.svg" alt="" />
                        <button>Start Challenge</button>
                    </span>
                </div>
                <div>
                    <h3>WANT TO READ</h3>
                    <span>
                        <img src="https://s.gr-assets.com/assets/react_components/shelf_display/icn_default_wtr_leftrail-62c079d4573e5db15651d273fc72d1d2.svg" alt="" />
                        <p>What do you want  to read next</p>
                    </span>
                    <Link to={"#"}>Recommendation</Link>
                </div>
                <div>
                    <h2>BOOKSHELVES</h2>
                    <div>
                        <Link>{0}</Link> <Link>Want to Read</Link>
                        <Link>{0}</Link> <Link>Currently Reading</Link>
                        <Link>{0}</Link> <Link>Read</Link>
                    </div>
                </div>
            </div>
            {/* mid section panel */}
            <div className=''>
                <div className='bg-white'>
                    <img src="https://images.gr-assets.com/misc/1751494847-1751494847_goodreads_misc.png" alt="" />
                    <div>
                        <Link to={"#"}>The Goodreads Staff Shares Their Summer Reading Plans</Link>
                        <p>Let our bookish team's Want to Read shelves inspire your season's reading!</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <h3>Update</h3>
                    <Link> <img src="https://s.gr-assets.com/assets/gr/icons/settings_cog-2acb8771e16e7cf04aa082503f1be885.svg" alt="" />
                        Customize
                    </Link>
                </div>
                <div className='border-1 border-gray-300 px-4 bg-white'>
                    <p>Trending this week in one of your favorite genres,</p>
                    <Link to={"#"}>Science Fiction</Link>
                    <div className='flex gap-6 px-4'>
                        <img src="src/assets/images/homepage/rightside/62873999._SY180_.jpg" alt="" />
                        <span className='pr-30'>
                            <h2>Translation State</h2>
                            <p>by Ann Leckie</p>
                            <button className='text-green-600'>Want to Read</button>
                            <p>
                                The mystery of a missing translator sets three lives on a collision course
                                that will have a ripple effect across the stars in this powerful new novel by award-winning author.
                            </p>

                        </span>
                    </div>

                </div>
            </div>
            {/* rightside panel */}
            <div className=''>
                <h2>NEWS & INTERVIEWS</h2>
                <h2>Catch Up on Recent Award-Winning Fiction</h2>
                <img src="https://images.gr-assets.com/blogs/1750352567p7/2974.jpg" alt="" />
                <p>114 likes</p>
                <hr />
                <h2>Improve Recommendations</h2>
                <p>
                    Rating at least 20 books improves your recommendations. You have rated 0.
                </p>
                <Link to={"#"}>Rate moe books</Link>
                <hr />
                <h2> BESTREADS CHOICE AWARDS</h2>
                <img src="https://s.gr-assets.com/assets/award/2024/choice-logo-home-module-medium-93ff87c2703c22a211ac01888eb34601.png" alt="" />

            </div>
        </div>
    )
}
