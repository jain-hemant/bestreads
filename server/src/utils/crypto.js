const bcrypt = require("bcrypt")
const { BCRYPT_SALT_ROUND } = require("../configs/config")

async function generateHash(rawText) {
    try {
        const hashed = bcrypt.hash(rawText, BCRYPT_SALT_ROUND)
        return hashed
    } catch (error) {
        console.log("Error while hashing password")
        return
    }
}

async function compareHash(rawText, hashedText) {
    try {
        const isVerified = await bcrypt.compare(rawText, hashedText)
        return isVerified
    } catch (error) {
        console.log("Error while comparing password")
        return
    }
}

module.exports = { generateHash, compareHash }