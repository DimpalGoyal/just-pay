const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.load()

mongoose.connect(process.env.MONGODB_URL)

// hashing password before storing 
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 10,
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 10,
    },
    password: {
        type: String,
        required: true,
        maxLength: 10,
    },
    username: {
        unique: true,
        type: String,
        required: true,
        maxLength: 20,
    },
})

const accountSchema = new mongoose.schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true, 
    }
})

const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account', accountSchema)

module.exports = {
    User,
    Account
}