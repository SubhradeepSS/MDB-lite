const { Movie } = require('../models/movie')
const { Rating } = require('../models/rating')

const handleMovieAdd = (req, res) => {
    const newMovie = new Movie(req.body)
    newMovie.save()
            .then(res.redirect('/mdb/'))
            .catch(err => console.log(err))
}


const getAllMovies = (req, res) => {
    Movie.find({}).then(movies => {
            res.render('mdb/movie/movies', { movies })
        })
}


const getMovie = (req, res) => {
    Movie.findOne({ name: req.params.name }).then(movie => {
        res.render('mdb/movie/movie', { movie, user: req.user })
    })
}

const deleteMovie = (req, res) => {
    Movie.findOne({ name: req.params.name }).then(movie => {
        Rating.deleteMany({ movie }).then(() => {
            movie.remove().then(() => {
                res.redirect('/mdb/movies')
            })
        })
    })
}

const editMovie = (req, res) => {
    Movie.findOne({ name: req.params.name }).then(movie => {
        res.render('mdb/movie/editMovie', { movie })
    })
}

const editMovieSubmit = (req, res) => {
    Movie.findOneAndUpdate({ name: req.params.name}, req.body).then(() => {
        res.redirect('/mdb/movies')
    })
}


module.exports = { 
    getAllMovies, 
    getMovie, 
    deleteMovie,
    editMovie,
    editMovieSubmit,
    handleMovieAdd
}