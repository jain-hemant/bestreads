const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const { BCRYPT_SALT_ROUND } = require("../configs/config")

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    phone: { type: String },
}, { versionKey: false, timestamps: true })

// Middleware: hash password before saving
// UserSchema.pre("save", async function (next) {
//     if (!this.isModify("password")) return next()
//     try {
//         this.password = await bcrypt.hash(this.password, BCRYPT_SALT_ROUND)
//         next()
//     } catch (error) {
//         next(error)
//     }
// })

// Method to compare passwords during login
// UserSchema.method.comparePassword = async function (userPassword) {
//     return await bcrypt.compare(userPassword, this.password)
// }
const UserModel = new mongoose.model("user", UserSchema)
module.exports = UserModel