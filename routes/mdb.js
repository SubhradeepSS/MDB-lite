const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require("../conf/auth.js")


router.get('/', ensureAuthenticated, (req, res) => {
    res.render('mdb/home', { user: req.user });
})


router.use('/movies', require('./movie'))
router.use('/profile', require('./profile'))
router.use('/ratings', require('./rating'))
router.use('/users', require('./user'))


module.exports = router