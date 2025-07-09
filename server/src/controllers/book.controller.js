const BookModel = require("../models/book.model")


async function addBook(req, res, next) {
    try {
        console.log("req.body - ", req.body)
        const { title, author, coverImage } = req.body

        if (!title || !author) return res.status(400).json({ message: "title, author field is required" })

        const newBook = new BookModel({ title, author, coverImage })
        await newBook.save()
        return res.status(201).json({ message: "New Book Added", data: newBook })
    } catch (error) {
        console.log("Error while adding book", error)
        return
    }
}

async function getAllBooks(req,res,next) {
    try {
        const books = await BookModel.find()
        if (!books) return res.status(404).json({ message: "Books not avaible." })
        return res.status(200).json({ data: books })
    } catch (error) {
        console.log("Error while fetching book", error)
        return
    }
}

async function getBookById(req, res, next) {
    try {
        const bookId = req.params
        const book = await BookModel.findById(bookId)
        if (!book) return res.status(404).json({ message: "Book not avaible." })
        return res.status(200).json({ data: book })
    } catch (error) {
        console.log("Error while fetching book", error)
        return
    }
}

async function updateBook(req, res, next) {
    try {
        const book = req.body
        const bookId = req.params
        if (!book || !bookId) return res.status(400).json({ message: "Please provide book id and book data to update. " })
        const updatedBook = await BookModel.findByIdAndUpdate(bookId, book)
        if (!book) return res.status(404).json({ message: "Book not avaible." })
        return res.status(200).json({ book, data: updatedBook })
    } catch (error) {
        console.log("Error while updating book", error)
        return
    }
}

async function deleteBook(req, res, next) {
    try {
        const bookId = req.params
        if (!bookId) return res.status(400).json({ message: "Please provide book id for delete. " })
        const deleted = new BookModel.findByIdAndDelete(bookId)

        return res.status(200).json({ message: "book deleted. ", data: deleted })

    } catch (error) {
        console.log("Error while deleting book", error)
        return
    }
}

module.exports = { addBook, getAllBooks, getBookById, updateBook, deleteBook }
