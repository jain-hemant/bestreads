const jwt = require("jsonwebtoken")
const { JWT_ACCESS_SECRETE, JWT_REFRESH_SECRETE, JWT_ACCESS_EXPIRE_IN, JWT_REFRESH_EXPIRE_IN } = require("../configs/config")

async function generateToken(isAccess = true, payload) {
    try {
        const secret = isAccess ? JWT_ACCESS_SECRETE : JWT_REFRESH_SECRETE
        const expireIn = isAccess ? JWT_ACCESS_EXPIRE_IN : JWT_REFRESH_EXPIRE_IN
        const token = jwt.sign(payload, secret, { expiresIn: expireIn })
        return token

    } catch (error) {
        console.log("Error While Generating Token", error)
    }
}

async function verifyToken(isAccess = true, token) {
    const secret = isAccess ? JWT_ACCESS_SECRETE : JWT_REFRESH_SECRETE
    const payload = jwt.verify(token, secret)
    return payload
}

module.exports = { generateToken, verifyToken }