const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")

const { getYourRatings, editYourRating, deleteYourRating } = require('../controllers/rating')


router.get('/', ensureAuthenticated, getYourRatings)
router.post('/', ensureAuthenticated, editYourRating)
router.post('/delete', ensureAuthenticated, deleteYourRating)


module.exports = router