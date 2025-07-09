const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    coverImage: { type: String, default: "https://pngimg.com/uploads/book/book_PNG2111.png" },
    availability: { type: Boolean, default: true },
}, { versionKey: false, timestamps: true })

const BookModel = new mongoose.model("book", BookSchema)

module.exports = BookModel
