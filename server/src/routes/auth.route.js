const { Router } = require("express")
const { register } = require("../controllers/auth.controller")

const AuthRoute = Router()

AuthRoute.post("/register", register)
// AuthRoute.post("/login",login)
// AuthRoute.post("/logout",logout)
// AuthRoute.delete("/me",me)

module.exports = AuthRoute