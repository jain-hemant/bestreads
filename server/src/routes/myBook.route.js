const { Router } = require("express")
const { myBooks, addBooksToUser, updateReadingStatus, updateRating } = require("../controllers/myBook.controller")
const { authentication, authorization } = require("../middlewares/auth.middileware")

const MyBookRoutes = Router()

MyBookRoutes.get("/", authentication, authorization(["user", "admin"]), myBooks)
MyBookRoutes.post("/:bookId", authentication, authorization(["user", "admin"]), addBooksToUser)
MyBookRoutes.patch("/:bookId/status", authentication, authorization(["user", "admin"]), updateReadingStatus)
MyBookRoutes.patch("/:bookId/rating", authentication, authorization(["user", "admin"]), updateRating)

module.exports = MyBookRoutes
