const mongoose = require("mongoose")
const { MONGO_URI } = require("./config")
async function connectToDB() {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Database Connect Successfully... ")
    } catch (error) {
        console.log("Error While Conecting to Database ", Error)
    }
}

module.exports = connectToDB