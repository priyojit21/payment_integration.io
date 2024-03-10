const mongoose = require("mongoose")

const connectDB = async() => {
    await mongoose.connect("mongodb://127.0.0.1:27017/react_razorpay")
    console.log(`${mongoose.connection.host} is connected`)
}
module.exports = connectDB