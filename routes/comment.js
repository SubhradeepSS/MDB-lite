const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")

const { editComment, deleteComment } = require('../controllers/comment')

router.post('/edit', ensureAuthenticated, editComment)
router.post('/delete', ensureAuthenticated, deleteComment)


module.exports = router