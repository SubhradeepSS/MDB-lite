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

const { getBlog, addBlog } = require('../controllers/blog')

const { addComment } = require('../controllers/comment')

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

router.post('/:name/blog', ensureAuthenticated, getBlog)
router.post('/:name/blog/add', ensureAuthenticated, addBlog)

router.post('/comment', ensureAuthenticated, addComment)

module.exports = router