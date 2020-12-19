const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")

const { viewProfile, editProfile, searchProfile } = require('../controllers/profile')


router.post('/search', ensureAuthenticated, searchProfile)
router.get('/:username', ensureAuthenticated, viewProfile)
router.post('/:username', ensureAuthenticated, editProfile)


module.exports = router