const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")

const { editProfile, editProfileSubmit } = require('../controllers/profile')


router.get('/', ensureAuthenticated, editProfile)
router.post('/', ensureAuthenticated, editProfileSubmit)


module.exports = router