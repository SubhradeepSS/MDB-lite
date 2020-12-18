const mongoose = require('mongoose');
const Schema = mongoose.Schema

const { UserSchema } = require('./user')
const { MovieSchema } = require('./movie')
const { CommentSchema } = require('./comment')

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: UserSchema,
        required: true
    },
    movie: {
        type: MovieSchema,
        required: true
    },
    comments: [ CommentSchema ]
},
    {
        timestamps: true
    }
)

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = { BlogSchema, Blog }