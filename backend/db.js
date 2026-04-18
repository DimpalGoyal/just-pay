const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:tBiLoEWFPhxpVhZI@cluster0.mvkomnu.mongodb.net/justPay')

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    username: String
})

const User = mongoose.model('User', userSchema)
module.exports = {
    User
}