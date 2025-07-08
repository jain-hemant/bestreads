const { verifyToken, generateToken } = require("../utils/token")

async function authentication(req, res, next) {
    try {
        // console.log("Inside auth middleware..")
        const accessToken = req.cookies.access
        const refreshToken = req.cookies.refresh

        if (!accessToken && !refreshToken) return res.status(401).json({ message: "Login Again" })
        if (!accessToken) {
            const payload = await verifyToken(false, refreshToken)
            if (!payload) return res.status(401).json({ message: "Login Again" })
            const { userId, name, role } = payload
            const accessToken = await generateToken(true, { userId, name, role })
            res.cookie("access", accessToken, { maxAge: 3600000, httpOnly: true })
            req.user.role = role
        }
        // console.log("auth", token)
        next()
    } catch (error) {
        return console.log("authe", error)
    }
}

async function authorization(roles) {

    return async (req, res, next) => {
        const userRole = req.user.roles
        if (roles.includes(userRole)) next()

        return res.status(403).json({ message: "Not authorized..." })
    }
}

module.exports = { authentication, authorization }