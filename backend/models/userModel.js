
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add contact"]
    },
    email: {
        type: String,
        required: [true, "please add email"],
        unique:[true,"email already exists"]
    },
    password: {
        type: String,
        required: [true, "please add password"]
    }
},
    {
        timestamp: true,
})

module.exports = mongoose.model("Users",userSchema);