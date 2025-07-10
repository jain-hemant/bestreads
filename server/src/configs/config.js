require("dotenv").config()

const FRONTEND_URL = process.env.FRONTEND_URL
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI  // mongodb://127.0.0.1:27017/bestreads
const JWT_ACCESS_SECRETE = process.env.JWT_ACCESS_SECRETE
const JWT_REFRESH_SECRETE = process.env.JWT_REFRESH_SECRETE
const BCRYPT_SALT_ROUND = Number(process.env.BCRYPT_SALT_ROUND)
const JWT_ACCESS_EXPIRE_IN = Number(process.env.JWT_ACCESS_EXPIRE_IN) * 3600
const JWT_REFRESH_EXPIRE_IN = Number(process.env.JWT_REFRESH_EXPIRE_IN) * 3600 * 12
const APP_LOGO = process.env.APP_LOGO

module.exports = {
    FRONTEND_URL,
    PORT,
    MONGO_URI,
    JWT_ACCESS_SECRETE,
    JWT_REFRESH_SECRETE,
    BCRYPT_SALT_ROUND,
    JWT_ACCESS_EXPIRE_IN,
    JWT_REFRESH_EXPIRE_IN,
    APP_LOGO
}