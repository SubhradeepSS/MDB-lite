const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require("../conf/auth.js")

router.get('/', ensureAuthenticated, (req, res) => {
    res.render('mdb/home', { user: req.user });
})

module.exports = router