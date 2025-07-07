const bcrypt = require("bcrypt")
const { BCRYPT_SALT_ROUND } = require("../configs/config")

async function generateHash(rawText) {
    try {
        const hashed = bcrypt.hash(rawText, BCRYPT_SALT_ROUND)
        return hashed
    } catch (error) {
        next(error)
    }
}

async function compareHash(rawText) {
    try {
        const isVerified = await bcrypt.compare(rawText, hashedText)
        return isVerified
    } catch (error) {
        next(error)
    }
}

module.exports = { generateHash, compareHash }