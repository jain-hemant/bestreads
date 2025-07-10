const cookieParser = require("cookie-parser")
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const AuthRoute = require("./routes/auth.route")
const { authentication, authorization } = require("./middlewares/auth.middileware")
const BookRoute = require("./routes/book.routes")
const MyBookRoutes = require("./routes/mybook.route")
const errorHandler = require("./middlewares/errorHandler.middleware")
const { FRONTEND_URL } = require("./configs/config")
const app = express()

// using in-built middlewares
app.use(express.json())
app.use(cookieParser())
app.use(helmet())
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
}));

// adding routes
app.use("/api/auth", AuthRoute)
app.use("/api/books", BookRoute)
app.use("/api/mybooks", MyBookRoutes)

// health Checkup
app.get("/api/health", (req, res) => res.send("Server health is Good"))

// test route

app.post("/api/test", authentication, authorization(["admin", "user"]), (req, res, next) => {
    throw new Error("test error") //res.send("Test successfull")
})

app.use(errorHandler)
module.exports = app


