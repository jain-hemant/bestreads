require("dotenv").config()

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI  // mongodb://127.0.0.1:27017/bestreads
const JWT_ACCESS_SECRETE = process.env.JWT_ACCESS_SECRETE
const JWT_REFRESH_SECRETE = process.env.JWT_REFRESH_SECRETE
const BCRYPT_SALT_ROUND = Number(process.env.BCRYPT_SALT_ROUND)
const APP_LOGO = process.env.APP_LOGO

module.exports = { PORT, MONGO_URI, JWT_ACCESS_SECRETE, JWT_REFRESH_SECRETE, BCRYPT_SALT_ROUND, APP_LOGO }