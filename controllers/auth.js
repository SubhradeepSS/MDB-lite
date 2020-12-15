const { User } = require('../models/user')
const passport = require('passport')
const bcrypt = require('bcrypt')

const handleSignup = (req, res) => {
    const { name, email, username, password, password2 } = req.body;
    let errors = [];
    // console.log(' Name ' + name + ' email :' + email + 'username: ' + username + ' pass:' + password);
    if (!name || !email || !username || !password || !password2) {
        errors.push({ msg: "Please fill in all fields" })
    }
    //check if match
    if (password !== password2) {
        errors.push({ msg: "passwords dont match" });
    }

    //check if password is more than 6 characters
    if (password.length < 6) {
        errors.push({ msg: 'password atleast 6 characters' })
    }
    if (errors.length > 0) {
        res.render('signup', {
            errors: errors,
            name: name,
            email: email,
            password: password,
            password2: password2
        })
    } else {
        //validation passed
        User.findOne({ username: username }).exec((err, user) => {
            // console.log(user);
            if (user) {
                errors.push({ msg: 'username already registered' });
                res.render('auth/signup', {
                    errors: errors,
                    name: name,
                    email: email,
                    password: password,
                    password2: password2
                })

            } else {
                const newUser = new User({ name, email, password, username });
                //hash password
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt,
                        (err, hash) => {
                            if (err) throw err;
                            //save pass to hash
                            newUser.password = hash;
                            //save user
                            newUser.save()
                                .then((value) => {
                                    // console.log(value)
                                    req.flash('success_msg', 'You have now registered!')
                                    res.redirect('/auth/login');
                                })
                                .catch(value => console.log(value));

                        })
                );
            }
        })
    }
}


const handleLogin = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/mdb',
        failureRedirect: '/auth/login',
        failureFlash: true,
    })(req, res, next);
}


const handleLogout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Now logged out');
    res.redirect('/auth/login');
}


module.exports = {
    handleLogout, handleLogin, handleSignup
}