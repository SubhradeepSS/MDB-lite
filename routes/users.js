const express = require('express')
const router = express.Router()

const { handleLogin, handleSignup, handleLogout } = require('../controllers/UserController')

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})


router.post('/signup', handleSignup)
router.post('/login', handleLogin)
router.get('/logout', handleLogout)


module.exports = router