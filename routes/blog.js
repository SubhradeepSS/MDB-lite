const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")

const { editBlog, deleteBlog, getYourBlogs } = require('../controllers/blog')

router.post('/edit', ensureAuthenticated, editBlog)
router.post('/delete', ensureAuthenticated, deleteBlog)
router.get('/', ensureAuthenticated, getYourBlogs)


module.exports = router