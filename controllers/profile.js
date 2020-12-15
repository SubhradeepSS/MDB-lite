const User = require('../models/user')

const editProfile = (req, res) => {
    res.render('mdb/user/profile', { user: req.user })
}

const editProfileSubmit = (req, res) => {
    let user = req.user
    user.email = req.body.email
    user.name = req.body.name
    user.save()
    res.redirect('/mdb/profile')
}


module.exports = { editProfile, editProfileSubmit }