const mongoose = require('mongoose');
const Schema = mongoose.Schema

const { UserSchema } = require('./user')
const { BlogSchema } = require('./blog')

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
        type: BlogSchema,
        required: true
    }
}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = { CommentSchema, Comment }