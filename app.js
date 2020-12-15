const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const expressEjsLayout = require('express-ejs-layouts')
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require("./conf/passport")(passport)

const db = require('./config/creds')

const app = express()
const port = 3000


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port)
        console.log('Database connected!!')
    })
    .catch(err => console.log(err))


app.set('view engine', 'ejs');
app.use(expressEjsLayout)
app.use(express.urlencoded({ extended: false }))
//express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
//use flash
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})


app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.use((req, res) => {
    res.status(400).render('404')
})