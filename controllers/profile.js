const { User } = require('../models/user')

const viewProfile = (req, res) => {
    User.findOne({ username:req.params.username }).then(user => {
        res.render('mdb/user/profile', { authUser: req.user, user })
    }) 
}

const editProfile = (req, res) => {
    let user = req.user
    user.email = req.body.email
    user.name = req.body.name
    user.save().then(() => {
        res.redirect('/mdb/')
    })
}

const searchProfile = (req, res) => {
    User.findOne({ username: req.body.username }).then(user => {
        if(user) {
            res.redirect('/mdb/profile/' + user.username)
        } 
        else {
            res.redirect('/mdb/profile/' + req.user.username)
        }
    })
}


module.exports = { editProfile, viewProfile, searchProfile }