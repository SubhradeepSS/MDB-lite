const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")

const { getAllUsers, deleteUser } = require('../controllers/user')

router.get('/', ensureAuthenticated, getAllUsers)
router.post('/delete', ensureAuthenticated, deleteUser)

module.exports = router