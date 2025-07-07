const cookieParser = require("cookie-parser")
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const AuthRoute = require("./routes/auth.route")
const app = express()

// using in-built middlewares
app.use(express.json())
app.use(cookieParser())
app.use(helmet())
app.use(cors())

// adding routes
app.use("/api/auth", AuthRoute)

// health Checkup
app.get("/api/health", (req, res) => res.send("Server health is Good"))

module.exports = app


