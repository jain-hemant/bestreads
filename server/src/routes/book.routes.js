const { Router } = require("express")
const { addBook, getAllBooks, getBookById } = require("../controllers/book.controller")
const { authentication, authorization } = require("../middlewares/auth.middileware")

const BookRoute = Router()

BookRoute.get("/", getAllBooks)

BookRoute.post("/add-book", authentication, authorization(["user", "admin"]), addBook)
BookRoute.get("/:id", authentication, authorization(["user", "admin"]), getBookById)
BookRoute.put("/:id", authentication, authorization(["user", "admin"]), getBookById)
BookRoute.delete("/:id", authentication, authorization(["user", "admin"]), getBookById)

module.exports = BookRoute