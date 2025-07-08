const { Router } = require("express")
const { register, login, logout } = require("../controllers/auth.controller")
const { authentication } = require("../middlewares/auth.middileware")

const AuthRoute = Router()

AuthRoute.post("/register", register)
AuthRoute.post("/login", login)
AuthRoute.post("/logout", logout)
// AuthRoute.delete("/me",me)

module.exports = AuthRoute