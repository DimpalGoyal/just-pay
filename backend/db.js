const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.load()

mongoose.connect(process.env.MONGODB_URL)

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