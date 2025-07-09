const mongoose = require("mongoose")

const MyBookSchema = mongoose.Schema({
    userId: { type: String, required: true },
    bookId: { type: String, required: true },
    status: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 4 }
}, { versionKey: false, timestamps: true })

const MyBookModel = new mongoose.model("mybook", MyBookSchema)

module.exports = MyBookModel