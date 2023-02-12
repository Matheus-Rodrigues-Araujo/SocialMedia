const mongoose = require('mongoose')
const {Schema } = mongoose 

const UserSchema = new Schema({
    username:{
        type: String,     
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    followings: {
        type: [String],
        default: []
    },
    followers: {
        type: [String],
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)