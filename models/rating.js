const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { UserSchema } = require('./user')
const { MovieSchema } = require('./movie')

const RatingSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: false
    },
    user: {
        type: UserSchema,
        required: true
    },
    movie: {
        type: MovieSchema,
        required: true
    }
})

const Rating = mongoose.model('Rating', RatingSchema)

module.exports = { RatingSchema, Rating }