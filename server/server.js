const app = require("./src/app")
const connectToDB = require("./src/configs/db")
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    connectToDB()
})