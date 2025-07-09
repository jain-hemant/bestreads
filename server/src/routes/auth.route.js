const { Router } = require("express")
const { register, login, logout, me } = require("../controllers/auth.controller")
const { authentication, authorization } = require("../middlewares/auth.middileware")

const AuthRoute = Router()

AuthRoute.post("/register", register)
AuthRoute.post("/login", login)
AuthRoute.get("/logout", logout)
AuthRoute.get("/me", authentication, me)

module.exports = AuthRoute