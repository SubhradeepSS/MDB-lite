const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require("../conf/auth.js")

router.get('/', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/home', ensureAuthenticated, (req, res) => {
    res.render('home', {
        user: req.user
    });
})

module.exports = router