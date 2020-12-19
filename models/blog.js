const mongoose = require('mongoose');
const Schema = mongoose.Schema

const { UserSchema } = require('./user')
const { MovieSchema } = require('./movie')

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
    }
},
    {
        timestamps: true
    }
)

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = { BlogSchema, Blog }