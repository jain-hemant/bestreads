import React from 'react'

export default function BookCard() {

    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                books.map((book) => (
                    <div key={book.id} className='flex flex-col shadow gap-2  bg-gray-800 text-white mt-2 '>
                        <div><img src={book.coverImage} alt={book.title} className='w-full h-48' /></div>
                        <div className='flex justify-between px-2'><span>{book.publish}</span> <span>{book.star} <span>{book.rating}</span></span></div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <h3 className='px-2 border-y-1 w-full text-center'>{book.title}</h3>
                            <button className=' w-full px-6 py-2 bg-green-800 text-white '>Want to Read</button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}


const books = [
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a131"
        },
        "title": "Romance in Paris",
        "author": "Ananya Iyer",
        "coverImage": "https://covers.openlibrary.org/b/id/10523393-L.jpg",
        "genres": "romance",
        "tag": "choice award",
        "availblity": true,
        "rating": 2000,
        "star": 4.7,
        "publish": 2025
    },
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a132"
        },
        "title": "Science Unlocked",
        "author": "Aarav Sharma",
        "coverImage": "https://covers.openlibrary.org/b/id/10523394-L.jpg",
        "genres": "science",
        "tag": "recommendation",
        "availblity": true,
        "rating": 2100,
        "star": 4.8,
        "publish": 2025
    },
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a133"
        },
        "title": "Artful India",
        "author": "Priya Verma",
        "coverImage": "https://covers.openlibrary.org/b/id/10523395-L.jpg",
        "genres": "arts",
        "tag": "lists",
        "availblity": true,
        "rating": 900,
        "star": 4.3,
        "publish": 2018
    },
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a134"
        },
        "title": "Tech Pioneers",
        "author": "Sneha Singh",
        "coverImage": "https://covers.openlibrary.org/b/id/10523396-L.jpg",
        "genres": "computer science",
        "tag": "recommendation",
        "availblity": true,
        "rating": 2600,
        "star": 4.9,
        "publish": 2025
    },
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a135"
        },
        "title": "Business Mavericks",
        "author": "Vikram Desai",
        "coverImage": "https://covers.openlibrary.org/b/id/10523397-L.jpg",
        "genres": "business",
        "tag": "giveaways",
        "availblity": true,
        "rating": 3900,
        "star": 4.8,
        "publish": 2024
    },
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a136"
        },
        "title": "Comic Stars",
        "author": "Kiran Joshi",
        "coverImage": "https://covers.openlibrary.org/b/id/10523398-L.jpg",
        "genres": "comic",
        "tag": "news & interview",
        "availblity": true,
        "rating": 1200,
        "star": 4.5,
        "publish": 2022
    },
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a137"
        },
        "title": "Crime in Kolkata",
        "author": "Meera Nair",
        "coverImage": "https://covers.openlibrary.org/b/id/10523399-L.jpg",
        "genres": "crime",
        "tag": "explore",
        "availblity": false,
        "rating": 700,
        "star": 3.9,
        "publish": 2016
    },
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a138"
        },
        "title": "Spiritual Wisdom",
        "author": "Rajesh Kumar",
        "coverImage": "https://covers.openlibrary.org/b/id/10523400-L.jpg",
        "genres": "spirituality",
        "tag": "lists",
        "availblity": true,
        "rating": 1300,
        "star": 4.4,
        "publish": 2022
    },
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a139"
        },
        "title": "Romantic Tales",
        "author": "Ananya Iyer",
        "coverImage": "https://covers.openlibrary.org/b/id/10523401-L.jpg",
        "genres": "romance",
        "tag": "choice award",
        "availblity": true,
        "rating": 2200,
        "star": 4.8,
        "publish": 2025
    },
    {
        "_id": {
            "$oid": "66c4b1a1e1a1a1a1a1a1a13a"
        },
        "title": "Science Breakthroughs",
        "author": "Aarav Sharma",
        "coverImage": "https://covers.openlibrary.org/b/id/10523402-L.jpg",
        "genres": "science",
        "tag": "recommendation",
        "availblity": true,
        "rating": 2300,
        "star": 4.9,
        "publish": 2025
    }
]
