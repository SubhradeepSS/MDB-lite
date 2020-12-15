const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    }
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = { Movie, MovieSchema }