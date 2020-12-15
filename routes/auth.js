const express = require('express')
const router = express.Router()

const { handleLogin, handleSignup, handleLogout } = require('../controllers/auth')


// LOGIN
router.get('/login', (req, res) => {
    res.render('auth/login')
})
router.post('/login', handleLogin)

//SIGNUP
router.get('/signup', (req, res) => {
    res.render('auth/signup')
})
router.post('/signup', handleSignup)

//LOGOUT
router.get('/logout', handleLogout)


module.exports = router