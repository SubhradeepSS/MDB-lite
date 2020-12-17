const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")

const { editProfile, editProfileSubmit } = require('../controllers/profile')


router.get('/:username', ensureAuthenticated, editProfile)
router.post('/:username', ensureAuthenticated, editProfileSubmit)


module.exports = router