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
            req.user = { userId, name, roles: role }
            return next()
        }
        const payload = await verifyToken(true, accessToken)
        if (!payload) return res.status(401).json({ message: "Login Again" });
        const { userId, name, role } = payload
        req.user = { userId, name, roles: role }
        // console.log("auth", token)
        return next()
    } catch (error) {
        return console.log("authe", error)
    }
}

function authorization(roles) {
    return async (req, res, next) => {
        if (!req.user || !req.user.roles) {
            return res.status(401).json({ message: "please login... " });
        }
        const userRole = req.user.roles
        if (roles.includes(userRole)) {
            return next()
        }
        console.log("Error in Role. ")
        return res.status(403).json({ message: "User not authorize to access this resource...." })
    }
}

module.exports = { authentication, authorization }