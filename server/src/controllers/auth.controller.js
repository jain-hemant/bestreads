const { JWT_ACCESS_EXPIRE_IN, JWT_REFRESH_EXPIRE_IN } = require("../configs/config")
const UserModel = require("../models/user.model")
const { generateHash, compareHash } = require("../utils/crypto")
const { generateToken } = require("../utils/token")

async function register(req, res, next) {
    try {
        const { name, email, password, phone } = req.body
        if (!name || !email || !password) return res.status(400).json({ message: "All Filed is required. " })

        const user = await UserModel.findOne({ email })
        if (user) return res.status(400).json({ message: "User is already register. " })

        const hashPassword = await generateHash(password)
        if (!hashPassword) return res.status(400).json({ message: "wrong password. " })

        const newUser = await new UserModel({ ...req.body, password: hashPassword })
        newUser.save()

        return res.status(201).json({ message: "User Created successfully" })

    } catch (error) {
        console.log("Error while creating user", error)
        return

    }
}

async function login(req, res, next) {
    const { email, password } = req.body
    try {
        if (!email || !password) return res.status(400).json({ message: "All Filed is required. " })
        const user = await UserModel.findOne({ email })
        if (!user) return res.status(404).json({ message: "User not found. " })

        const passMatch = await compareHash(password, user.password)
        // console.log(passMatch)
        if (!passMatch) return res.status(400).json({ message: "Invalid password." })
        const payload = { userId: user.id, name: user.name, role: user.role }
        const accessToken = await generateToken(true, payload)
        const refreshToken = await generateToken(false, payload)

        res.cookie("access", accessToken, { maxAge: 3600000, httpOnly: true }) //  JWT_ACCESS_EXPIRE_IN
        res.cookie("refresh", refreshToken, { maxAge: 5000000, httpOnly: true }) // JWT_REFRESH_EXPIRE_IN
        // req.user.role = user.role
        return res.status(200).json({ message: "Login successfully... ", userId: user.id })

    } catch (error) {
        console.log("Error while Login", error)
        return
    }
}

async function logout(req, res, next) {
    try {
        res.clearCookie("access")
        res.clearCookie("refresh")
        res.status(200).json({ message: "Logout successfully... " })

    } catch (error) {
        return console.log("Error while logout. ")
    }
}

async function me(req, res, next) {
    try {

    } catch (error) {

    }
}

module.exports = { register, login, logout }