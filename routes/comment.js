const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")

const { editComment, deleteComment, getYourComments } = require('../controllers/comment')

router.post('/edit', ensureAuthenticated, editComment)
router.post('/delete', ensureAuthenticated, deleteComment)
router.get('/', ensureAuthenticated, getYourComments)


module.exports = router