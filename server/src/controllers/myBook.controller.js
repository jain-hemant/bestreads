const MyBookModel = require("../models/myBook.model")

async function myBooks(req, res, next) {
    try {
        const userId = req.user.userId
        if (!userId) return res.status(400).json({ message: "UserId Not found, login again. " })

        const myBooks = await MyBookModel.find({ userId })

        if (!myBooks) return res.status(404).json({ message: "Book Not found, check book id. " })

        return res.status(200).json({ data: myBooks })

    } catch (error) {
        console.log("Error while fetching mybook of user", error)
        return
    }
}

async function addBooksToUser(req, res, next) {
    try {

        const bookId = req?.params.bookId
        const userId = req?.user?.userId

        const bookStatus = req.body
        if (!bookId) return res.status(400).json({ Message: "Book Id is required." })
        if (!userId) return res.status(400).json({ Message: "No user found, login again." })

        const newMyBook = new MyBookModel({ userId, bookId, ...bookStatus })
        await newMyBook.save()

        return res.status(201).json({ Message: "Book is addedd in user list." })
    } catch (error) {
        console.log("Error while adding mybook", error)
        return
    }
}

async function updateReadingStatus(req, res, next) {
    try {
        const { bookId } = req?.params
        // console.log("bookId", bookId)
        // console.log("status", status)

        const userId = req?.user?.userId
        // console.log("User Id ", userId)
        const status = req.body.status
        if (!bookId) return res.status(400).json({ Message: "Book Id is required." })
        if (!userId) return res.status(400).json({ Message: "No user found, login again." })

        const updateMyBook = await MyBookModel.findOneAndUpdate(
            { userId, bookId },
            { status },
            { new: true, runValidators: true }
        )
        if (!updateMyBook) return res.status(404).json({ Message: "Book not found." })
        return res.status(201).json({ Message: "Status of Book is updated.", data: updateMyBook })
    } catch (error) {
        console.log("Error while updating status in mybook", error)
        return next(error)
    }
}

async function updateRating(req, res, next) {
    try {
        const { bookId } = req?.params
        const userId = req?.user?.userId
        const { rating } = req.body
        if (!bookId) return res.status(400).json({ Message: "Book Id is required." })
        if (!userId) return res.status(400).json({ Message: "No user found, login again." })

        const updateMyBookRating = await MyBookModel.findOneAndUpdate(
            { userId, bookId },
            { rating },
            { new: true, runValidators: true }
        )
        if (!updateMyBookRating) return res.status(404).json({ Message: "Book not found." })
        return res.status(201).json({ Message: "Rating of book is updated in user list.", data: updateMyBookRating })
    } catch (error) {
        console.log("Error while update rating of mybook", error)
        return
    }
}



module.exports = { myBooks, addBooksToUser, updateReadingStatus, updateRating }