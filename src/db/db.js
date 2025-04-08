const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0/practice')
        console.log("mongodb Connected")
    } catch (error) {
        console.log("error", error)
    }
}

module.exports = connectDB;
