const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")

const { 
    getAllMovies,
    getMovie,
    deleteMovie,
    editMovie,
    editMovieSubmit,
    handleMovieAdd
} = require('../controllers/movie')

const { getRatings, addRating } = require('../controllers/rating')


router.get('/addMovie', ensureAuthenticated, (req, res) => {
    res.render('mdb/movie/addMovie')
})
router.post('/addMovie', ensureAuthenticated, handleMovieAdd);

router.get('/', ensureAuthenticated, getAllMovies)
router.get('/:name', ensureAuthenticated, getMovie)
router.get('/delete/:name', ensureAuthenticated, deleteMovie)

router.get('/edit/:name', ensureAuthenticated, editMovie)
router.post('/edit/:name', ensureAuthenticated, editMovieSubmit)

router.get('/:name/ratings', ensureAuthenticated, getRatings)
router.post('/:name/ratings', ensureAuthenticated, addRating)

module.exports = router