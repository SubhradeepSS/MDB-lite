const { User } = require('../models/user')

const editProfile = (req, res) => {
    User.findOne({ username:req.params.username }).then(user => {
        res.render('mdb/user/profile', { authUser: req.user, user })
    }) 
}

const editProfileSubmit = (req, res) => {
    let user = req.user
    user.email = req.body.email
    user.name = req.body.name
    user.save()
    res.redirect('/mdb/')
}


module.exports = { editProfile, editProfileSubmit }