const mongoose = require('mongoose');
const Schema = mongoose.Schema

const { UserSchema } = require('./user')

const CommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: UserSchema,
        required: true
    },
    blog: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: 'Blog'
    }
}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = { CommentSchema, Comment }