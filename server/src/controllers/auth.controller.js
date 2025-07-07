const UserModel = require("../models/user.model")
const { generateHash } = require("../utils/crypto")

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

    }
}

module.exports = { register }