const { Schema, default: mongoose } = require('mongoose')

const CommentSchema = new Schema({
    postId:{
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    commentText: {
        type:String,
        required: String,
        min: 4
    },
    like:{
        type: [String],
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model("Comment", CommentSchema)