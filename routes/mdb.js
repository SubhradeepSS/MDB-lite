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

const { editProfile, editProfileSubmit } = require('../controllers/profile')
const { 
        getRatings, 
        addRating,
        getYourRatings,
        editYourRating,
        deleteYourRating,
    } = require('../controllers/rating')


router.get('/', ensureAuthenticated, (req, res) => {
    res.render('mdb/home', { user: req.user });
})


router.get('/addMovie', ensureAuthenticated, (req, res) => {
    res.render('mdb/movie/addMovie')
})
router.post('/addMovie', ensureAuthenticated, handleMovieAdd);
router.get('/movies', ensureAuthenticated, getAllMovies)
router.get('/movies/:name', ensureAuthenticated, getMovie)
router.get('/movies/delete/:name', ensureAuthenticated, deleteMovie)
router.get('/movies/edit/:name', ensureAuthenticated, editMovie)
router.post('/movies/edit/:name', ensureAuthenticated, editMovieSubmit)


router.get('/profile', ensureAuthenticated, editProfile)
router.post('/profile', ensureAuthenticated, editProfileSubmit)


router.get('/movies/:name/ratings', ensureAuthenticated, getRatings)
router.post('/movies/:name/ratings', ensureAuthenticated, addRating)


router.get('/ratings', ensureAuthenticated, getYourRatings)
router.post('/ratings', ensureAuthenticated, editYourRating)
router.post('/ratings/delete', ensureAuthenticated, deleteYourRating)

module.exports = router