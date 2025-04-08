const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});

const userSchema = mongoose.model('User', userModel)
module.exports = userSchema